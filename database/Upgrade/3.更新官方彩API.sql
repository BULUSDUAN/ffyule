USE Ticket
GO


--��Ѹ�ֲַ� qqffc
UPDATE Sys_Lottery SET ApiUrl=N'http://www.b1cp.com/api?p=json&t=txffc&limit=1&token=00fb782bad8e5241' WHERE Code = 'qqffc';

--����ʱʱ�� cqssc
UPDATE Sys_Lottery SET ApiUrl=N'http://api.b1cp.com/api?p=json&t=cqssc&limit=1&token=00fb782bad8e5241' WHERE Code = 'cqssc';

--�½�ʱʱ�� xjssc
UPDATE Sys_Lottery SET ApiUrl=N'http://api.b1cp.com/api?p=json&t=xjssc&limit=1&token=00fb782bad8e5241' WHERE Code = 'xjssc';

--�㶫11ѡ5 gd11x5
UPDATE Sys_Lottery SET ApiUrl=N'http://api.b1cp.com/api?p=json&t=gd115&limit=1&token=00fb782bad8e5241' WHERE Code = 'gd11x5';

--�Ϻ�11ѡ5 sh11x5
UPDATE Sys_Lottery SET ApiUrl=N'http://api.b1cp.com/api?p=json&t=sh115&limit=1&token=00fb782bad8e5241' WHERE Code = 'sh11x5';

--����11ѡ5 jx11x5
UPDATE Sys_Lottery SET ApiUrl=N'http://api.b1cp.com/api?p=json&t=jx115&limit=1&token=00fb782bad8e5241' WHERE Code = 'jx11x5';

--����3D 3d
UPDATE Sys_Lottery SET ApiUrl=N'http://api.b1cp.com/t?p=json&t=fc3d&token=D91E74A076A94253' WHERE Code = '3d';

--��� ����3
UPDATE Sys_Lottery SET ApiUrl=N'http://api.b1cp.com/t?p=json&t=pl3&token=3880B1212E4A22EA' WHERE Code = 'p3';

--�Ϻ�ʱʱ�� ssl
UPDATE Sys_Lottery SET ApiUrl=N'http://api.b1cp.com/api?p=json&t=shssl&limit=1&token=00fb782bad8e5241' WHERE Code = 'ssl';

--���ʱʱ�� ssl
UPDATE Sys_Lottery SET ApiUrl=N'http://api.b1cp.com/api?p=json&t=tjssc&limit=1&token=00fb782bad8e5241' WHERE Code = 'tjssc';

--����PK10 bjpk10
UPDATE Sys_Lottery SET ApiUrl=N'http://api.b1cp.com/api?p=json&t=bjpk10&limit=1&token=00fb782bad8e5241' WHERE Code = 'bjpk10';
