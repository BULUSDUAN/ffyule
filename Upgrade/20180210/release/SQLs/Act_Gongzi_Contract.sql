USE [Ticket]
GO
/****** Object:  StoredProcedure [dbo].[Act_Gongzi_Contract]    Script Date: 2/9/2018 3:44:41 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER proc [dbo].[Act_Gongzi_Contract]
@UcId varchar(200),
@output varchar(200) output
as
BEGIN
	declare @ParentId varchar(20),
			@UserId varchar(20) 
	select @ParentId=[ParentId],@UserId=[UserId] from [N_UserContract] where Id=@UcId


	--判断活动是否已领取
	declare @IsGet int
	select @IsGet=count(*) from Act_ActiveRecord where UserId=@userId and ActiveType='ActGongziContract' and DATEDIFF(day,STime,GETDATE())=0
	
	if(@IsGet>0)
	begin
		set @output='今天已领取！'
		return;
	end

	declare @bet decimal(18,4),
			@money decimal(18,4)

	SELECT @bet=isnull(cast(round((isnull(Sum(bet),0)-isnull(Sum(Cancellation),0)),4) as numeric(20,4)),0) FROM [N_UserMoneyStatAll] a 
	where dbo.f_GetUserCode(UserId) like '%,'+@userId+',%'  and DateDiff(dd,STime,getdate())=0 


	declare @count int
	select @count=count(*) from N_UserContractDetail with(nolock) where UcId=@UcId and @bet>=MinMoney*10000 
	if(@count>0)
	begin
		SELECT top 1 @money=cast(round([Money]*@bet*0.01,4) as numeric(10,4)) FROM N_UserContractDetail where UcId=@UcId and @bet>=MinMoney*10000 order by Id desc
	end
	else
	begin
		set @money=0
	end

	declare @sqlstr varchar(200)
	--派发工资
	if(@money>0)
	begin
		exec Act_ContractGZOperTran @ParentId,@userId,'ActGongziContract','契约工资',@bet,@money,@sqlstr output
	end
	
	set @output='领取成功'+CONVERT(varchar(10),@money)
	return 1;
END