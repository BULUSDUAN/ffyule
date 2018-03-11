USE [Ticket]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

if (exists (select 1 from sys.objects where name = N'GZOperByDate'))
    drop proc GZOperByDate
go

/*
	结算指定日期的工资
	@gzdate: 结算日期
*/
CREATE PROCEDURE GZOperByDate
	@userId INT, --工资接收用户
	@userGroup INT, --工资接收用户级别
	@gzUserId INT, --工资发放用户
	@contractId INT, --契约Id
	@gzdate DateTime, --工资结算日期
	@result varchar(200) output
as
BEGIN
	--判断活动是否已领取
	declare @isGet int
	select @isGet=count(*) from Act_ActiveRecord where UserId=@userId and ActiveType = 'ActGongziContract' and DATEDIFF(day, STime, @gzdate) = 0
	
	if(@isGet>0)
	begin
		set @result='今天已领取！'
		return;
	end

	declare @bet decimal(18,4),
			@money decimal(18,4)

	SELECT @bet=isnull(cast(round((isnull(Sum(bet),0)-isnull(Sum(Cancellation),0)),4) as numeric(20,4)),0) FROM [N_UserMoneyStatAll] a 
	where dbo.f_GetUserCode(UserId) like '%,'+CAST(@userId AS NVARCHAR(10))+',%'  and DateDiff(dd, STime, @gzdate) = 0 


	declare @count int

	IF @userGroup = 2
	BEGIN
		select @count = count(*) from Act_DayGzSet with(nolock) where GroupId = 2 and [Money] > 0 and @bet >= MinMoney * 10000
		if(@count>0)
		begin
			SELECT top 1 @money = cast(round([Money] * @bet * 0.01,4) as numeric(10,4)) FROM Act_DayGzSet 
				where GroupId = 2 and Money > 0 and @bet >= MinMoney*10000 order by Id desc
		end
		else
		begin
			set @money=0
		end
	END
	ELSE
	BEGIN
		select @count = count(*) from N_UserContractDetail with(nolock) where UcId=@contractId and [Money] > 0 and @bet >= MinMoney * 10000
		if(@count>0)
		begin
			SELECT top 1 @money = cast(round([Money] * @bet * 0.01,4) as numeric(10,4)) FROM N_UserContractDetail 
				where UcId=@contractId and Money > 0 and @bet >= MinMoney*10000 order by Id desc
		end
		else
		begin
			set @money=0
		end
	END
	
	--判断父级是否发放工资, 并且父级账号不是平台管理账户，如果未发放，则不允许发放工资
	declare @state BIT = 0
	declare @isParGet int
	select @isParGet=count(*) from Act_ActiveRecord where UserId=@gzUserId and ActiveType = 'ActGongziContract' and DATEDIFF(day, STime, @gzdate) = 0
	 
	 --直属会员，直接由平台发放工资
	if(@userGroup < 2 AND @isParGet<=0 AND EXISTS(SELECT 1 FROM N_User WHERE Id=@gzUserId AND ISNULL(parentId, 0) > 0))
	begin
		set @result='父级会员未领取工资'
		SELECT @state = CASE WHEN @money >0 THEN 1 ELSE 0 END
	end
	else
	begin	
		--派发工资
		if(@money>0)
		begin
			exec GZTranByDate @gzUserId, @userId, 'ActGongziContract', N'契约工资', @bet, @money, @gzdate, N'系统自动派发', @result output

			set @result = N'领取成功'
		end
		else
			set @result = N'未满足工资契约销量额度'
	end
	
	--添加派发日志记录
	DELETE FROM Log_ContractOper WHERE UserId=@userId AND DATEDIFF(d, @gzdate, OperTime) = 0 AND Type=2
	INSERT INTO Log_ContractOper(UserId, ParentId, ContractId, Type, Money, Bet, Remark, OperTime, STime, Allowed) 
			VALUES(@userId, @gzUserId, @contractId, 2, @money, @bet, @result, @gzdate, GETDATE(), @state);

	return 1;
END