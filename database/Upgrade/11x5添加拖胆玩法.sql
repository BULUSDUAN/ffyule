USE Ticket;
GO

--1, ��Ӳ��ִ���
DECLARE @bigId INT, @sort INT, @lttype INT = 2;
SELECT @bigId = MAX(Id) + 1 FROM Sys_PlayBigType;

INSERT INTO Sys_PlayBigType(Id, TypeId, Title, Title2, Sort, IsOpen, IsOpenIphone, STime)
SELECT @bigId, @ltType, N'��ѡ�ϵ�', NULL, @bigId, 0, 1, GETDATE()
WHERE NOT EXISTS (SELECT 1 FROM Sys_PlayBigType WHERE TypeId=@lttype AND Title=N'��ѡ�ϵ�');

--2, ��ʹ����С��: ��ѡ�ϵ�
--����С��: Type 1-ֱѡ,2-��ѡ,3-����, flag �Ƿ���ʾ��ҳ����
SELECT @bigid = Id FROM Sys_PlayBigType WHERE TypeId=@lttype AND Title=N'��ѡ�ϵ�';

--���ϵ�
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 3, N'��ѡ�ϵ�', N'���ϵ�', 'P11_RXTD2', N'���ϵ�', N'��01-11�У�ѡȡ2�������ϵĺ������Ͷע��ÿע�����ٰ���1�����뼰1�����롣', N'�磺ѡ���� 08��ѡ������ 06����������Ϊ 06 08 11 09 02����Ϊ�н���', N'�ֱ�ӵ���������01-11�У�����ѡ��1�������1���������һע��ֻҪ����˳��ҡ����5������������ͬʱ������ѡ��1�������1�����룬��ѡ�������ȫ�У���Ϊ�н���', 10.758, 10.758, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P11_RXTD2' AND LotteryId=@lttype);

--���ϵ�
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 3, N'��ѡ�ϵ�', N'���ϵ�', 'P11_RXTD3', N'���ϵ�', N'��01-11�У�ѡȡ3�������ϵĺ������Ͷע��ÿע�����ٰ���1�����뼰2�����롣', N'�磺ѡ���� 08��ѡ������ 06 11����������Ϊ 06 08 11 09 02����Ϊ�н���', N'�ֱ�ӵ���������01-11�У�����ѡ��1�������2���������һע��ֻҪ����˳��ҡ����5������������ͬʱ������ѡ��1�������2�����룬��ѡ�������ȫ�У���Ϊ�н���', 32.274, 32.274, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P11_RXTD3' AND LotteryId=@lttype);

--���ϵ�
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 3, N'��ѡ�ϵ�', N'���ϵ�', 'P11_RXTD4', N'���ϵ�', N'��01-11�У�ѡȡ4�������ϵĺ������Ͷע��ÿע�����ٰ���1�����뼰3�����롣', N'�磺ѡ���� 08��ѡ������ 06 09 11����������Ϊ 06 08 11 09 02����Ϊ�н���', N'�ֱ�ӵ���������01-11�У�����ѡ��1�������3���������һע��ֻҪ����˳��ҡ����5������������ͬʱ������ѡ��1�������3�����룬��ѡ�������ȫ�У���Ϊ�н���', 129.096, 129.096, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P11_RXTD4' AND LotteryId=@lttype);

--���ϵ�
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 3, N'��ѡ�ϵ�', N'���ϵ�', 'P11_RXTD5', N'���ϵ�', N'��01-11�У�ѡȡ5�������ϵĺ������Ͷע��ÿע�����ٰ���1�����뼰4�����롣', N'�磺ѡ���� 08��ѡ������ 02 06 09 11����������Ϊ  06 08 11 09 02����Ϊ�н���', N'�ֱ�ӵ���������01-11�У�����ѡ��1�������4���������һע��ֻҪ����˳��ҡ����5������������ͬʱ������ѡ��1�������4�����룬��ѡ�������ȫ�У���Ϊ�н���', 903.672, 903.672, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P11_RXTD5' AND LotteryId=@lttype);

--���ϵ�
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 3, N'��ѡ�ϵ�', N'���ϵ�', 'P11_RXTD6', N'���ϵ�', N'��01-11�У�ѡȡ6�������ϵĺ������Ͷע��ÿע�����ٰ���1�����뼰5�����롣', N'�磺ѡ���� 08��ѡ������ 01 02 05 06 09 11����������Ϊ 06 08 11 09 02����Ϊ�н���', N'�ֱ�ӵ���������01-11�У�����ѡ��1�������5���������һע��ֻҪ����˳��ҡ����5����������ͬʱ�����ڵ�����������������У���Ϊ�н���', 150.612, 150.612, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P11_RXTD6' AND LotteryId=@lttype);

--���ϵ�
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 3, N'��ѡ�ϵ�', N'���ϵ�', 'P11_RXTD7', N'���ϵ�', N'��01-11�У�ѡȡ7�������ϵĺ������Ͷע��ÿע�����ٰ���1�����뼰6�����롣', N'�磺ѡ���� 08��ѡ������ 01 02 05 06 07 09 11����������Ϊ 06 08 11 09 02����Ϊ�н���', N'�ֱ�ӵ���������01-11�У�����ѡ��1�������6���������һע��ֻҪ����˳��ҡ����5����������ͬʱ�����ڵ�����������������У���Ϊ�н���', 43.032, 43.032, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P11_RXTD7' AND LotteryId=@lttype);

--���ϵ�
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 3, N'��ѡ�ϵ�', N'���ϵ�', 'P11_RXTD8', N'���ϵ�', N'��01-11�У�ѡȡ8�������ϵĺ������Ͷע��ÿע�����ٰ���1�����뼰7�����롣', N'�磺ѡ���� 08��ѡ������ 01 02 03 05 06 07 09 11����������Ϊ 06 08 11 09 02����Ϊ�н���', N'�ֱ�ӵ���������01-11�У�����ѡ��1�������7���������һע��ֻҪ����˳��ҡ����5����������ͬʱ�����ڵ�����������������У���Ϊ�н���', 16.137, 16.137, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P11_RXTD8' AND LotteryId=@lttype);

--�����ֶ�����Sys_PlaySmallType.MinBonus
IF EXISTS(SElECT 1 FROM dbo.SYSOBJECTS WHERE Id = OBJECT_ID(N'Sys_PlaySmallType') AND XType = N'U')
	AND EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID(N'Sys_PlaySmallType') AND name = N'MinBonus')
	ALTER TABLE Sys_PlaySmallType ALTER COLUMN MinBonus decimal(18, 4);
GO

--�����ֶ�����Sys_PlaySmallType.MaxBonus
IF EXISTS(SElECT 1 FROM dbo.SYSOBJECTS WHERE Id = OBJECT_ID(N'Sys_PlaySmallType') AND XType = N'U')
	AND EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID(N'Sys_PlaySmallType') AND name = N'MaxBonus')
	ALTER TABLE Sys_PlaySmallType ALTER COLUMN MaxBonus decimal(18, 4);
GO

--��������
UPDATE Sys_PlaySmallType SET MinBonus = '10.758', MaxBonus = '10.758' WHERE Title2 = 'P11_RXTD2';
UPDATE Sys_PlaySmallType SET MinBonus = '32.274', MaxBonus = '32.274' WHERE Title2 = 'P11_RXTD3';
UPDATE Sys_PlaySmallType SET MinBonus = '129.096', MaxBonus = '129.096' WHERE Title2 = 'P11_RXTD4';
UPDATE Sys_PlaySmallType SET MinBonus = '903.672', MaxBonus = '903.672' WHERE Title2 = 'P11_RXTD5';
UPDATE Sys_PlaySmallType SET MinBonus = '150.612', MaxBonus = '150.612' WHERE Title2 = 'P11_RXTD6';
UPDATE Sys_PlaySmallType SET MinBonus = '43.032', MaxBonus = '43.032' WHERE Title2 = 'P11_RXTD7';
UPDATE Sys_PlaySmallType SET MinBonus = '16.137', MaxBonus = '16.137' WHERE Title2 = 'P11_RXTD8';
