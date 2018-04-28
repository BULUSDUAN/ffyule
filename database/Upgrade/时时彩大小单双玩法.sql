USE Ticket;
GO

--1, ��Ӳ��ִ���
DECLARE @bigId INT, @sort INT, @lttype INT = 1;

--�´�С
SELECT @bigId = MAX(Id) + 1 FROM Sys_PlayBigType;
INSERT INTO Sys_PlayBigType(Id, TypeId, Title, Title2, Sort, IsOpen, IsOpenIphone, STime)
SELECT @bigId, @ltType, N'�´�С', NULL, @bigId, 0, 1, GETDATE()
WHERE NOT EXISTS (SELECT 1 FROM Sys_PlayBigType WHERE TypeId=@lttype AND Title=N'�´�С');

--�µ�˫
SELECT @bigId = MAX(Id) + 1 FROM Sys_PlayBigType;
INSERT INTO Sys_PlayBigType(Id, TypeId, Title, Title2, Sort, IsOpen, IsOpenIphone, STime)
SELECT @bigId, @ltType, N'�µ�˫', NULL, @bigId, 0, 1, GETDATE()
WHERE NOT EXISTS (SELECT 1 FROM Sys_PlayBigType WHERE TypeId=@lttype AND Title=N'�µ�˫');

--2, ��ʹ����С��: �´�С
--����С��: Type 1-ֱѡ,2-��ѡ,3-����, flag �Ƿ���ʾ��ҳ����
SELECT @bigid = Id FROM Sys_PlayBigType WHERE TypeId=@lttype AND Title=N'�´�С';

--�´�С, ��λ
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 1, N'�´�С', N'��λ', 'P_DX_W', N'��λ', N'Ͷע�ĺ����뿪���ĺ�����λ(��һ��)һ�¼��н�', N'��: 5 6 7 8 9���н�, С: 0 1 2 3 4���н�', N'Ͷע�ĺ����뿪���ĺ�����λ(��һ��)һ�¼��н�, 1 3 5 7 9���н�', 19.56, 19.56, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P_DX_W' AND LotteryId=@lttype);

--�´�С, ǧλ
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 1, N'�´�С', N'ǧλ', 'P_DX_Q', N'ǧλ', N'Ͷע�ĺ����뿪���ĺ���ǧλ(�ڶ���)һ�¼��н�', N'��: 5 6 7 8 9���н�, С: 0 1 2 3 4���н�', N'Ͷע�ĺ����뿪���ĺ���ǧλ(�ڶ���)һ�¼��н�', 19.56, 19.56, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P_DX_Q' AND LotteryId=@lttype);

--�´�С, ��λ
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 1, N'�´�С', N'��λ', 'P_DX_B', N'��λ', N'Ͷע�ĺ����뿪���ĺ����λ(������)һ�¼��н�', N'��: 5 6 7 8 9���н�, С: 0 1 2 3 4���н�', N'Ͷע�ĺ����뿪���ĺ����λ(������)һ�¼��н�', 19.56, 19.56, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P_DX_B' AND LotteryId=@lttype);

--�´�С, ʮλ
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 1, N'�´�С', N'ʮλ', 'P_DX_S', N'ʮλ', N'Ͷע�ĺ����뿪���ĺ���ʮλ(������)һ�¼��н�', N'��: 5 6 7 8 9���н�, С: 0 1 2 3 4���н�', N'Ͷע�ĺ����뿪���ĺ���ʮλ(������)һ�¼��н�', 19.56, 19.56, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P_DX_S' AND LotteryId=@lttype);

--�´�С, ��λ
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 1, N'�´�С', N'��λ', 'P_DX_G', N'��λ', N'Ͷע�ĺ����뿪���ĺ����λ(������)һ�¼��н�', N'��: 5 6 7 8 9���н�, С: 0 1 2 3 4���н�', N'Ͷע�ĺ����뿪���ĺ����λ(������)һ�¼��н�', 19.56, 19.56, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P_DX_G' AND LotteryId=@lttype);

--3, ��ʹ����С��: �µ�˫
--����С��: Type 1-ֱѡ,2-��ѡ,3-����, flag �Ƿ���ʾ��ҳ����
SELECT @bigid = Id FROM Sys_PlayBigType WHERE TypeId=@lttype AND Title=N'�µ�˫';

--�µ�˫, ��λ
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 1, N'�µ�˫', N'��λ', 'P_DS_W', N'��λ', N'Ͷע�ĺ����뿪���ĺ�����λ(��һ��)һ�¼��н�', N'����1 3 5 7 9���н�, ˫: 0 2 4 6 8���н�', N'Ͷע�ĺ����뿪���ĺ�����λ(��һ��)һ�¼��н�', 19.56, 19.56, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P_DS_W' AND LotteryId=@lttype);

--�µ�˫, ǧλ
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 1, N'�µ�˫', N'ǧλ', 'P_DS_Q', N'ǧλ', N'Ͷע�ĺ����뿪���ĺ���ǧλ(�ڶ���)һ�¼��н�', N'����1 3 5 7 9���н�, ˫: 0 2 4 6 8���н�', N'Ͷע�ĺ����뿪���ĺ���ǧλ(�ڶ���)һ�¼��н�', 19.56, 19.56, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P_DS_Q' AND LotteryId=@lttype);

--�µ�˫, ��λ
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 1, N'�µ�˫', N'��λ', 'P_DS_B', N'��λ', N'Ͷע�ĺ����뿪���ĺ����λ(������)һ�¼��н�', N'����1 3 5 7 9���н�, ˫: 0 2 4 6 8���н�', N'Ͷע�ĺ����뿪���ĺ����λ(������)һ�¼��н�', 19.56, 19.56, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P_DS_B' AND LotteryId=@lttype);

--�µ�˫, ʮλ
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 1, N'�µ�˫', N'ʮλ', 'P_DS_S', N'ʮλ', N'Ͷע�ĺ����뿪���ĺ���ʮλ(������)һ�¼��н�', N'����1 3 5 7 9���н�, ˫: 0 2 4 6 8���н�', N'Ͷע�ĺ����뿪���ĺ���ʮλ(������)һ�¼��н�', 19.56, 19.56, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P_DS_S' AND LotteryId=@lttype);

--�µ�˫, ��λ
SELECT @sort = MAX(Sort) + 1 FROM Sys_PlaySmallType;
INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, 
MaxBonus, MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, 
IsOpenIphone, flag, STime)
SELECT @lttype, @bigId, @sort, 1, N'�µ�˫', N'��λ', 'P_DS_G', N'��λ', N'Ͷע�ĺ����뿪���ĺ����λ(������)һ�¼��н�', N'����1 3 5 7 9���н�, ˫: 0 2 4 6 8���н�', N'Ͷע�ĺ����뿪���ĺ����λ(������)һ�¼��н�', 19.56, 19.56, 0.01, 0, 0, 0, 0, 0, 99999, 0, 0, 0, 2, 0, 1, 0, GETDATE()
WHERE NOT EXISTS(SELECT 1 FROM Sys_PlaySmallType WHERE Title2='P_DS_G' AND LotteryId=@lttype);

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

--�������ʣ���С����˫
UPDATE Sys_PlaySmallType SET MinBonus = '3.96', MaxBonus = '3.96' WHERE Title2 LIKE 'P_DX_%' OR Title2 LIKE 'P_DS_%';
