USE [Ticket]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

if (exists (select 1 from sys.objects where name = N'FH1125OperByDate'))
    drop proc FH1125OperByDate
go

if (exists (select 1 from sys.objects where name = N'FH1631OperByDate'))
    drop proc FH1631OperByDate
go

/*
	结算当月16号到当月最后一天的分红
	@fhdate: 结算日期
*/
CREATE PROCEDURE FH1631OperByDate
	@userId INT, --分红接收用户
	@userGroup INT, --分红接收用户级别
	@fhUserId INT, --分红发放用户
	@contractId varchar(200), --契约Id
	@fhdate DateTime, --分红结算日期
	@result varchar(200) output
as
BEGIN
	DECLARE @startTime DATETIME, @endTime DATETIME, @days INT
	SET @startTime = CAST((Convert(varchar(7),@fhdate,120)+'-16 00:00:00') AS DATETIME)
	SET @endTime = DATEADD(DD, -1, CAST((Convert(varchar(7),DATEADD(MM, 1, @fhdate),120)+'-01 23:59:59') AS DATETIME))
	SET @days = DateDiff(d, @startTime, @endTime) + 1

	--判断活动是否已领取
	declare @isGet int
	select @isGet=count(*) from Act_AgentFHRecord where UserId=@UserId and DATEDIFF(day, STime, @fhdate)=0
	
	if(@isGet>0)
	begin
		set @result='今天已领取！'
		return;
	end

	declare @money decimal(18,4),
			@bet decimal(18,4),
			@loss decimal(18,4),
			@Per decimal(18,4),
			@GroupName varchar(200)

	--查询当月11号到25号消费量
	SELECT @bet=(isnull(sum(Bet),0)-isnull(sum(Cancellation),0)) FROM [N_UserMoneyStatAll] with(nolock)
	where (STime>=Convert(varchar(7),@fhdate,120)+'-15 00:00:00' and STime<Convert(varchar(7),DATEADD(MM, 1, @fhdate),120)+'-01 00:00:00')
	and dbo.f_GetUserCode(UserId) like '%'+dbo.f_User8Code(@UserId)+'%'

	--查询当月11号到25号亏损量
	SELECT @loss=isnull(sum(Bet),0)-(isnull(sum(Win),0)+isnull(sum(Give),0)+isnull(sum(Change),0)+isnull(sum(Cancellation),0)+isnull(sum(Point),0))
	FROM [N_UserMoneyStatAll] with(nolock)
	where (STime>=Convert(varchar(7),@fhdate,120)+'-15 00:00:00' and STime<Convert(varchar(7),DATEADD(MM, 1, @fhdate),120)+'-01 00:00:00')
	and dbo.f_GetUserCode(UserId) like '%'+dbo.f_User8Code(@UserId)+'%'

	if(@loss < 100)
	begin
		set @result='您的亏损未满100元'
		--添加派发日志记录
		DELETE FROM Log_ContractOper WHERE UserId=@userId AND DATEDIFF(d, @fhdate, OperTime) =0	AND Type = 1
		INSERT INTO Log_ContractOper(UserId, ParentId, ContractId, Type, Money, Bet, Loss, Remark, OperTime, STime, Allowed) 
				VALUES(@userId, @fhUserId, @contractId, 1, 0, @bet, @loss, @result, @fhdate, GETDATE(), 0);
		return;
	end
	
	--判断消费是否具备条件
	declare @IsTrue int
	
	IF @userGroup = 2
	BEGIN
		select @IsTrue=count(*) from Act_Day15FHSet with(nolock) where GroupId =2 and Group3 > 0 and @bet>=MinMoney*@days*10000 
		if(@IsTrue<1)
		begin
			set @Per=0
		end
		else
		begin
			--取出对应的分红百分比
			select top 1 @Per=Group3 from Act_Day15FHSet with(nolock) where GroupId =2 and Group3 > 0 
			and @bet>=MinMoney*@days*10000 order by MinMoney desc
		end
	END
	ELSE
	BEGIN
		select @IsTrue=count(*) from N_UserContractDetail with(nolock) where UcId=@contractId and [Money] > 0 and @bet>=MinMoney*@days*10000 
		if(@IsTrue<1)
		begin
			set @Per=0
		end
		else
		begin
			--取出对应的分红百分比
			select top 1 @Per=[Money] from N_UserContractDetail with(nolock) where UcId=@contractId and [Money] > 0 
			and @bet>=MinMoney*@days*10000 order by MinMoney desc
		end
	END
	
	--计算得到的金额
	set @money=convert(decimal(18,4),@Per)*convert(decimal(18,4),@loss)/100
	set @result=@money
	
	--判断父级是否发放分红，并且父级账号不是平台管理账户，如果未发放，则不允许发放分红
	declare @isParGet int
	declare @state BIT = 0

	--直属会员，直接由平台发放工资
	select @isParGet=count(*) from Act_AgentFHRecord where UserId=@fhUserId and DATEDIFF(day, STime, @fhdate)=0
	if(@userGroup < 2 AND @isParGet<=0 AND EXISTS(SELECT 1 FROM N_User WHERE Id=@fhUserId AND ISNULL(parentId, 0) > 0))
	begin
		set @result='父级会员未领取分红'
		SELECT @state = CASE WHEN @money >0 THEN 1 ELSE 0 END
	end
	else
	begin
		--派发分红
		if(@money>0)
		begin
			INSERT INTO [Act_AgentFHRecord]([UserId],[AgentId],[StartTime],[EndTime],[Bet],[Total],[Per],[InMoney],[STime],[Remark])
				VALUES(@userId,99,@startTime,@endTime,@bet,@loss,@per,@money,@fhdate,N'系统契约分红')
				
			exec FHTranByDate @fhUserId,@userId,'ActFenHong',N'契约分红',@money,@fhdate,@result output

			set @result = N'领取成功'
		end
		else
			set @result = N'未满足分红契约亏损额度'
	end
	
	--添加派发日志记录
	DELETE FROM Log_ContractOper WHERE UserId=@userId AND DATEDIFF(d, @fhdate, OperTime) =0 AND Type = 1
	INSERT INTO Log_ContractOper(UserId, ParentId, ContractId, Type, Money, Bet, Loss, Per, Remark, OperTime, STime, Allowed) 
			VALUES(@userId, @fhUserId, @contractId, 1, @money, @bet, @loss, @per, @result, @fhdate, GETDATE(), @state);

	return 1;
END
