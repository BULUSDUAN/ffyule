USE Ticket;
GO


--��������ע��UserCode�ֶ�
IF EXISTS(SElECT 1 FROM dbo.SYSOBJECTS WHERE Id = OBJECT_ID(N'N_UserRegLink') AND XType = N'U')
	AND NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID(N'N_UserRegLink') AND name = N'UserGroup')
	ALTER TABLE N_UserRegLink ADD UserGroup INT;
GO

UPDATE N_UserRegLink SET UserGroup=0 WHERE UserGroup IS NULL;
GO
	
	
--�ر�Ȥζ�淨
UPDATE Sys_PlayBigType SET IsOpen = 1, IsOpenIphone = 1 WHERE Title LIKE '%Ȥζ%';

UPDATE Sys_PlaySmallType SET IsOpen = 1, IsOpenIphone = 1 WHERE Title0 LIKE '%Ȥζ%' OR Title LIKE '%Ȥζ%' OR TitleName LIKE '%Ȥζ%';