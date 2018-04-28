USE Ticket
GO

SELECT TOP 30 * From Sys_PlaySmallType with(nolock)  Where 1=1 and LotteryId=4 ORDER BY Id ASC;

INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, MaxBonus, 
MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, IsOpenIphone, 
flag, STime)
SELECT 4, 4006, (SELECT MAX(Sort) + 1 FROM Sys_PlaySmallType), 1, N'�µ�˫', N'������', 'PK10_DSFour', N'�µ�˫������', NULL, NULL, NULL, 19.60, 
19.60, 0.002000, NULL, 0, NULL, 0, 0, 999999, 0, 0, 0, 2, 0, 1, 
0, GETDATE()
WHERE NOT EXISTS (SELECT 1 FROM Sys_PlaySmallType WHERE LotteryId=4 AND Title2 = 'PK10_DSFour')
GO

INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, MaxBonus, 
MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, IsOpenIphone, 
flag, STime)
SELECT 4, 4006, (SELECT MAX(Sort) + 1 FROM Sys_PlaySmallType), 1, N'�µ�˫', N'������', 'PK10_DSFive', N'�µ�˫������', NULL, NULL, NULL, 19.60, 
19.60, 0.002000, NULL, 0, NULL, 0, 0, 999999, 0, 0, 0, 2, 0, 1, 
0, GETDATE()
WHERE NOT EXISTS (SELECT 1 FROM Sys_PlaySmallType WHERE LotteryId=4 AND Title2 = 'PK10_DSFive')
GO

INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, MaxBonus, 
MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, IsOpenIphone, 
flag, STime)
SELECT 4, 4006, (SELECT MAX(Sort) + 1 FROM Sys_PlaySmallType), 1, N'�µ�˫', N'������', 'PK10_DSSix', N'�µ�˫������', NULL, NULL, NULL, 19.60, 
19.60, 0.002000, NULL, 0, NULL, 0, 0, 999999, 0, 0, 0, 2, 0, 1, 
0, GETDATE()
WHERE NOT EXISTS (SELECT 1 FROM Sys_PlaySmallType WHERE LotteryId=4 AND Title2 = 'PK10_DSSix')
GO

INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, MaxBonus, 
MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, IsOpenIphone, 
flag, STime)
SELECT 4, 4006, (SELECT MAX(Sort) + 1 FROM Sys_PlaySmallType), 1, N'�µ�˫', N'������', 'PK10_DSSeven', N'�µ�˫������', NULL, NULL, NULL, 19.60, 
19.60, 0.002000, NULL, 0, NULL, 0, 0, 999999, 0, 0, 0, 2, 0, 1, 
0, GETDATE()
WHERE NOT EXISTS (SELECT 1 FROM Sys_PlaySmallType WHERE LotteryId=4 AND Title2 = 'PK10_DSSeven')
GO

INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, MaxBonus, 
MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, IsOpenIphone, 
flag, STime)
SELECT 4, 4006, (SELECT MAX(Sort) + 1 FROM Sys_PlaySmallType), 1, N'�µ�˫', N'�ڰ���', 'PK10_DSEight', N'�µ�˫�ڰ���', NULL, NULL, NULL, 19.60, 
19.60, 0.002000, NULL, 0, NULL, 0, 0, 999999, 0, 0, 0, 2, 0, 1, 
0, GETDATE()
WHERE NOT EXISTS (SELECT 1 FROM Sys_PlaySmallType WHERE LotteryId=4 AND Title2 = 'PK10_DSEight')
GO

INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, MaxBonus, 
MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, IsOpenIphone, 
flag, STime)
SELECT 4, 4006, (SELECT MAX(Sort) + 1 FROM Sys_PlaySmallType), 1, N'�µ�˫', N'�ھ���', 'PK10_DSNine', N'�µ�˫�ھ���', NULL, NULL, NULL, 19.60, 
19.60, 0.002000, NULL, 0, NULL, 0, 0, 999999, 0, 0, 0, 2, 0, 1, 
0, GETDATE()
WHERE NOT EXISTS (SELECT 1 FROM Sys_PlaySmallType WHERE LotteryId=4 AND Title2 = 'PK10_DSNine')
GO

INSERT INTO Sys_PlaySmallType(LotteryId, Radio, Sort, Type, Title0, Title, Title2, TitleName, remark, example, help, MaxBonus, 
MinBonus, PosBonus, MaxBonus2, MinBonus2, PosBonus2, WzNum, MinNum, MaxNum, Pos, PosNum, Bonus, randoms, IsOpen, IsOpenIphone, 
flag, STime)
SELECT 4, 4006, (SELECT MAX(Sort) + 1 FROM Sys_PlaySmallType), 1, N'�µ�˫', N'��ʮ��', 'PK10_DSTen', N'�µ�˫��ʮ��', NULL, NULL, NULL, 19.60, 
19.60, 0.002000, NULL, 0, NULL, 0, 0, 999999, 0, 0, 0, 2, 0, 1, 
0, GETDATE()
WHERE NOT EXISTS (SELECT 1 FROM Sys_PlaySmallType WHERE LotteryId=4 AND Title2 = 'PK10_DSTen')
GO



