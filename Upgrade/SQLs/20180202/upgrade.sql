USE Ticket;
GO

--����֧����ʽΨһ�� UCode
IF EXISTS(SElECT 1 FROM dbo.SYSOBJECTS WHERE Id = OBJECT_ID(N'Sys_ChargeSet') AND XType = N'U')
	AND NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID(N'Sys_ChargeSet') AND name = N'UCode')
	ALTER TABLE Sys_ChargeSet ADD UCode NVARCHAR(20);
GO

UPDATE Sys_ChargeSet SET UCode = ID WHERE UCode IS NULL;
--UPDATE Sys_ChargeSet SET UCode = N'suibipay' WHERE UCode = N'1074';
GO

--���ӷ�Ա�������ٷֱ�
IF EXISTS(SElECT 1 FROM dbo.SYSOBJECTS WHERE Id = OBJECT_ID(N'N_UserGroup') AND XType = N'U')
	AND NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID(N'N_UserGroup') AND name = N'MaxGZPercent')
	ALTER TABLE N_UserGroup ADD MaxGZPercent INT NOT NULL DEFAULT(0);
GO

--���ӷ�Ա�ֺ����ٷֱ�
IF EXISTS(SElECT 1 FROM dbo.SYSOBJECTS WHERE Id = OBJECT_ID(N'N_UserGroup') AND XType = N'U')
	AND NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID(N'N_UserGroup') AND name = N'MaxFHPercent')
	ALTER TABLE N_UserGroup ADD MaxFHPercent INT NOT NULL DEFAULT(0);
GO

UPDATE N_UserGroup SET MaxGZPercent=1, MaxFHPercent=1;
UPDATE N_UserGroup SET MaxGZPercent=1, MaxFHPercent=1 WHERE Name=N'����';
UPDATE N_UserGroup SET MaxGZPercent=2, MaxFHPercent=2 WHERE Name=N'��Ȩֱ��';
UPDATE N_UserGroup SET MaxGZPercent=11, MaxFHPercent=11 WHERE Name=N'ֱ��';