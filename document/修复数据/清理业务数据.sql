
SELECT * FROM N_UserBet WHERE STime2 < '2018-03-08 00:00:00';
SELECT * FROM N_UserMoneyLog WHERE STime2 < '2018-03-08 00:00:00';
SELECT * FROM N_UserMoneyStatAll WHERE STime < '2018-03-08 00:00:00';
SELECT * FROM N_UserMoneyStatAll WHERE STime < '2018-03-08 00:00:00';


SELECT * FROM N_UserMoneyLog
SELECT * FROM Log_ContractOper
SELECT * FROM Act_ActiveRecord WHERE Remark=N'��Լ����';
SELECT * FROM Act_AgentFHRecord WHERE Remark=N'��Լ�ֺ�';



DELETE FROM Act_ActiveRecord WHERE Remark=N'��Լ����';
DELETE FROM Act_AgentFHRecord WHERE Remark=N'��Լ�ֺ�';
DELETE FROM N_UserBet;
DELETE FROM Log_ContractOper;
DELETE FROM N_UserMoneyStatAll;
DELETE FROM N_UserMoneyLog;
