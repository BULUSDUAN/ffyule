
SELECT * FROM N_User WHERE UserName='xxp12345';


--��Ա���п�
SELECT * FROM N_UserBank WHERE UserId='2370';
--������п���־
SELECT * FROM N_UserBankLog WHERE UserId='2370';
--��ԱͶע��¼
SELECT * FROM N_UserBet WHERE UserId='2370';
--��Ա��ֵ��¼
SELECT * FROM N_UserCharge WHERE UserId='2370';
--��Ա��ֵ��־
SELECT * FROM N_UserChargeLog WHERE UserId='2370';
--��Ա��Լ
SELECT * FROM N_UserContract WHERE UserId='2370';
SELECT * FROM N_UserContractDetail WHERE UcId IN (SELECT Id FROM N_UserContract WHERE UserId='2370');
--��Ա�ʼ���¼
SELECT * FROM N_UserEmail WHERE SendId='2370' OR ReceiveId='2370';
--��Ա���ּ�¼
SELECT * FROM N_UserGetCash WHERE UserId='2370';
--��Ա������־
SELECT * FROM N_UserGetCashHistory WHERE UserId='2370';
--��Ա֪ͨ��Ϣ
SELECT * FROM N_UserMessage WHERE UserId='2370';
--��Ա�˱��¼
SELECT * FROM N_UserMoneyLog WHERE UserId='2370';
SELECT * FROM N_UserMoneyLog WHERE UserId=1966 AND Code=4 AND Remark = 'xxp12345 ��Ϸ����';

--��Աÿ���˻�����
SELECT * FROM N_UserMoneyStatAll WHERE UserId='2370';
--��Ա���������
SELECT * FROM N_UserPlaySetting WHERE UserId='2370';
SELECT * FROM N_UserQuota WHERE UserId='2370';
SELECT * FROM N_UserQuotas WHERE UserId='2370';
SELECT * FROM N_UserRegLink WHERE UserId='2370'
SELECT * FROM N_UserZhBet WHERE UserId='2370';
SELECT * FROM Log_AdminOper WHERE UserId='2370';
SELECT * FROM Log_ContractOper WHERE UserId='2370';
SELECT * FROM Log_Exception WHERE UserId='2370';
SELECT * FROM Log_Point WHERE UserId='2370';
SELECT * FROM Log_Sys WHERE UserId='2370';
SELECT * FROM Log_UserLogin WHERE UserId='2370';
SELECT * FROM Act_UserFHDetail WHERE UserId='2370';
SELECT * FROM Act_ActiveRecord WHERE UserId='2370';
SELECT * FROM Act_AgentFHRecord WHERE UserId='2370';
SELECT * FROM Act_BetRecond WHERE UserId='2370';
SELECT * FROM Pay_temp WHERE UserId='2370';
SELECT * FROM Pay_temp WHERE UserId='2370';
