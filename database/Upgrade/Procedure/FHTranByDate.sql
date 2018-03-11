USE [Ticket]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

if (exists (select 1 from sys.objects where name = N'FHTranByDate'))
    drop proc FHTranByDate
go

/*
	结算指定月份1号到15号的工资
	@fhdate: 结算日期
*/
CREATE PROCEDURE FHTranByDate
@parentId varchar(20),
@userId varchar(20),
@ActiveType varchar(20),
@ActiveName varchar(20),
@money decimal(18,4),
@fhdate DateTime, --工资结算日期
@result varchar(200) output 
as
BEGIN	
	--直属会员由平台发放工资，没有父级流水
	IF @parentId != 0
	BEGIN
		declare @SsId varchar(50),@MoneyAfter decimal(18,4),@UserMoney decimal(18,4)
		select @UserMoney=Money from N_User where Id=@parentId;
		set @MoneyAfter=convert(decimal(18,4),@UserMoney)-convert(decimal(18,4),@money)

		--if(@MoneyAfter>=0)
		--begin
			update [N_User] set Money=convert(decimal(18,4),Money) - convert(decimal(18,4),@money) where Id=@parentId
			select @SsId='A_'+SUBSTRING(replace(newid(), '-', ''),0,19)
			--插入账变记录
			insert into N_UserMoneyLog (SsId,UserId,LotteryId,PlayId,SysId,MoneyChange,MoneyAgo,MoneyAfter,STime,IsOk,Code,IsSoft,Remark,STime2,Md5Code) 
			values(@SsId,@parentId,0,0,0,-@money,@UserMoney,@MoneyAfter,@fhdate,1,99,2,@ActiveName,GETDATE(),substring(sys.fn_sqlvarbasetostr(HashBytes('MD5',@SsId+''+Convert(varchar(10),'9')+''+Convert(varchar(10),@parentId))),3,32))
		
			if exists (select Id from N_UserMoneyStatAll where UserId=@parentId and datediff(d,STime,@fhdate)=0)
			begin
				Update N_UserMoneyStatAll set AgentFH=AgentFH-@money where  UserId=@parentId and datediff(d,STime,@fhdate)=0
			end
			else
			begin
				Insert into N_UserMoneyStatAll(UserId,AgentFH,STime) values (@parentId,-@money,@fhdate)
			end
		--end
	END

	declare @SsId2 varchar(50),@MoneyAfter2 decimal(18,4),@UserMoney2 decimal(18,4)
	select @UserMoney2=Money from N_User where Id=@UserId;
	set @MoneyAfter2=convert(decimal(18,4),@UserMoney2)+convert(decimal(18,4),@money)
	--if(@MoneyAfter>=0)
	--begin
		update [N_User] set Money=convert(decimal(18,4),Money)+convert(decimal(18,4),@money) where Id=@UserId
		select @SsId2='A_'+SUBSTRING(replace(newid(), '-', ''),0,19)
		--插入账变记录
		insert into N_UserMoneyLog (SsId,UserId,LotteryId,PlayId,SysId,MoneyChange,MoneyAgo,MoneyAfter,STime,IsOk,Code,IsSoft,Remark,STime2,Md5Code) 
		values(@SsId2,@UserId,0,0,0,@money,@UserMoney2,@MoneyAfter2,@fhdate,1,99,2,@ActiveName,GETDATE(),substring(sys.fn_sqlvarbasetostr(HashBytes('MD5',@SsId2+''+Convert(varchar(10),'9')+''+Convert(varchar(10),@UserId))),3,32))

		if exists (select Id from N_UserMoneyStatAll where UserId=@UserId and datediff(d,STime,@fhdate)=0)
		begin
			Update N_UserMoneyStatAll set AgentFH=AgentFH+@money where  UserId=@UserId and datediff(d,STime,@fhdate)=0
		end
		else
		begin
			Insert into N_UserMoneyStatAll(UserId,AgentFH,STime) values (@UserId,@money,@fhdate)
		end
	--end


	set @result='领取成功'+Convert(Nvarchar(100),@money)

		--set @result='领取成功'
	return '1'
END