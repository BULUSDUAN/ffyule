Use Ticket
Go

--����û�����
DELETE FROM N_User;
--��Ա���п�
DELETE FROM N_UserBank;

IF EXISTS (SELECT 1 FROM Sysobjects WHERE Type=N'TR' AND name = N'TR_UserBankLog_Delete')
	DROP TRIGGER [dbo].[TR_UserBankLog_Delete];
	
IF EXISTS (SELECT 1 FROM Sysobjects WHERE Type=N'TR' AND name = N'TR_UserBankLog_Update')
	DROP TRIGGER [dbo].[TR_UserBankLog_Update];

--������п���־
DELETE FROM N_UserBankLog;
GO

create trigger [dbo].[TR_UserBankLog_Delete]
on [dbo].[N_UserBankLog]
for delete
as
rollback
GO

create trigger [dbo].[TR_UserBankLog_Update]
on [dbo].[N_UserBankLog]
for update
as
rollback
GO



--��ԱͶע��¼
DELETE FROM N_UserBet;


IF EXISTS (SELECT 1 FROM Sysobjects WHERE Type=N'TR' AND name = N'trg_UserCharge_Del')
	DROP TRIGGER [dbo].[trg_UserCharge_Del];
	
--��Ա��ֵ��¼
DELETE FROM N_UserCharge;

--��Ա��ֵ��־
DELETE FROM N_UserChargeLog;
GO

create trigger [dbo].[trg_UserCharge_Del] on   [dbo].[N_UserCharge]

instead of delete
AS
BEGIN
declare @cou int
select @cou=count(*) from deleted;
if (@cou>0)
RAISERROR('���ݲ�����ɾ��!', 16, 1)
END

GO

--��Ա��Լ
DELETE FROM N_UserContract;
DELETE FROM N_UserContractDetail;
--��Ա�ʼ���¼
DELETE FROM N_UserEmail;

IF EXISTS (SELECT 1 FROM Sysobjects WHERE Type=N'TR' AND name = N'trg_GetCash_Del')
	DROP TRIGGER [dbo].[trg_GetCash_Del];
	
--��Ա���ּ�¼
DELETE FROM N_UserGetCash;
--��Ա������־
DELETE FROM N_UserGetCashHistory;
GO

create trigger [dbo].[trg_GetCash_Del] on   [dbo].[N_UserGetCash]

instead of delete
AS
BEGIN
declare @cou int
select @cou=count(*) from deleted;
if (@cou>0)
RAISERROR('���ݲ�����ɾ��!', 16, 1)
END

GO
--��Ա֪ͨ��Ϣ
DELETE FROM N_UserMessage;


IF EXISTS (SELECT 1 FROM Sysobjects WHERE Type=N'TR' AND name = N'TR_UserMoneyLog_Update')
	DROP TRIGGER [dbo].[TR_UserMoneyLog_Update];
	
IF EXISTS (SELECT 1 FROM Sysobjects WHERE Type=N'TR' AND name = N'trg_UserMoneyLog_Del')
	DROP TRIGGER [dbo].[trg_UserMoneyLog_Del];
	
--��Ա�˱��¼
DELETE FROM N_UserMoneyLog;

--��Աÿ���˻�����
DELETE FROM N_UserMoneyStatAll;
GO

Create trigger [dbo].[trg_UserMoneyLog_Del] on   [dbo].[N_UserMoneyLog]
for delete
as
rollback

GO

CREATE trigger [dbo].[TR_UserMoneyLog_Update] 
on [dbo].[N_UserMoneyLog] 
for insert --���봥��
as

declare 
@LogSsId varchar(32),
@LogCode varchar(10),
@UserId int,
@MoneyChange decimal(18,4),
@UserMoney decimal(18,4),
@STime2 datetime,
@Id int

select @Id=Id,@LogSsId=SsId,@LogCode=Code,@UserId=UserId,@MoneyChange=MoneyChange,@STime2=STime2 from inserted;

if(@LogCode=99)
BEGIN
update [N_UserMoneyLog] set Code=12 where Id=@Id
end
else if(@LogCode=100)
begin
update [N_UserMoneyLog] set Code=13 where Id=@Id
end
else
begin
select @UserMoney=Money from N_User where Id=@UserId;
declare @MoneyAfter decimal(18,4)
set @MoneyAfter=convert(decimal(18,4),@MoneyChange)+convert(decimal(18,4),@UserMoney)
if(@MoneyAfter>=0)
BEGIN
	update [N_UserMoneyLog] set MoneyAgo=@UserMoney,MoneyAfter=@MoneyAfter where Id=@Id
	update [N_User] set Money=convert(decimal(18,4),Money)+convert(decimal(18,4),@MoneyChange) where Id=@UserId
	declare @STatAllId varchar(10)
	if exists (select Id from N_UserMoneyStatAll where UserId=@UserId and datediff(d,STime,@STime2)=0)
	begin
		select @STatAllId=Id from N_UserMoneyStatAll where UserId=@UserId and datediff(d,STime,@STime2)=0
		if(@LogCode=1)
			Update N_UserMoneyStatAll set [Charge]=[Charge]+@MoneyChange where Id=@STatAllId
		if(@LogCode=2)
			Update N_UserMoneyStatAll set [GetCash]=[GetCash]-@MoneyChange where Id=@STatAllId
		--if(@LogCode=3)
		--	Update N_UserMoneyStatAll set [Bet]=[Bet]-@MoneyChange where Id=@STatAllId
		if(@LogCode=4)
			Update N_UserMoneyStatAll set [Point]=[Point]+@MoneyChange where Id=@STatAllId
		if(@LogCode=5)
			Update N_UserMoneyStatAll set [Win]=[Win]+@MoneyChange where Id=@STatAllId
		if(@LogCode=6)
			Update N_UserMoneyStatAll set Bet=Bet+@MoneyChange,[Cancellation]=[Cancellation]+@MoneyChange where Id=@STatAllId
		if(@LogCode=9)
			Update N_UserMoneyStatAll set [Give]=[Give]+@MoneyChange where Id=@STatAllId
		if(@LogCode=10)
			Update N_UserMoneyStatAll set [Other]=[Other]+@MoneyChange where Id=@STatAllId
		if(@LogCode=11)
			Update N_UserMoneyStatAll set [Change]=[Change]+@MoneyChange where Id=@STatAllId
		if(@LogCode=12)
			Update N_UserMoneyStatAll set [AgentFH]=[AgentFH]+@MoneyChange where Id=@STatAllId
	end
	else
	begin
		if(@LogCode=1)
			Insert into N_UserMoneyStatAll(UserId,[Charge],STime) values (@UserId,@MoneyChange,@STime2)
		if(@LogCode=2)
			Insert into N_UserMoneyStatAll(UserId,[GetCash],STime) values (@UserId,-@MoneyChange,@STime2)
		if(@LogCode=3)
			Insert into N_UserMoneyStatAll(UserId,[Bet],STime) values (@UserId,0,@STime2)
		if(@LogCode=4)
			Insert into N_UserMoneyStatAll(UserId,[Point],STime) values (@UserId,@MoneyChange,@STime2)
		if(@LogCode=5)
			Insert into N_UserMoneyStatAll(UserId,[Win],STime) values (@UserId,@MoneyChange,@STime2)
		if(@LogCode=6)
			Insert into N_UserMoneyStatAll(UserId,Bet,[Cancellation],STime) values (@UserId,@MoneyChange,@MoneyChange,@STime2)
		if(@LogCode=9)
			Insert into N_UserMoneyStatAll(UserId,[Give],STime) values (@UserId,@MoneyChange,@STime2)
		if(@LogCode=10)
			Insert into N_UserMoneyStatAll(UserId,[Other],STime) values (@UserId,@MoneyChange,@STime2)
		if(@LogCode=11)
			Insert into N_UserMoneyStatAll(UserId,[Change],STime) values (@UserId,@MoneyChange,@STime2)
		if(@LogCode=12)
			Insert into N_UserMoneyStatAll(UserId,[AgentFH],STime) values (@UserId,@MoneyChange,@STime2)
	end
END
end
GO

--��Ա���������
DELETE FROM N_UserPlaySetting;
DELETE FROM N_UserQuota;
DELETE FROM N_UserQuotas;
DELETE FROM N_UserRegLink
DELETE FROM N_UserZhBet;
DELETE FROM Log_AdminOper;
DELETE FROM Log_ContractOper;
DELETE FROM Log_Exception;
DELETE FROM Log_Point;
DELETE FROM Log_Sys;


IF EXISTS (SELECT 1 FROM Sysobjects WHERE Type=N'TR' AND name = N'trg_Log_UserLogin_Del')
	DROP TRIGGER [dbo].[trg_Log_UserLogin_Del];
	
DELETE FROM Log_UserLogin;
GO

create trigger [dbo].[trg_Log_UserLogin_Del] on   [dbo].[Log_UserLogin]
for delete
as
rollback
GO

DELETE FROM Act_UserFHDetail;
DELETE FROM Act_ActiveRecord;
DELETE FROM Act_AgentFHRecord;
DELETE FROM Act_BetRecond;
DELETE FROM Pay_temp;
DELETE FROM Pay_temp;

DELETE FROM Sys_LotteryData
GO

SELECT * FROM Sys_LotteryData;