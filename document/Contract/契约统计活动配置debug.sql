
SELECT * FROM N_UserContract UC with(nolock) INNER JOIN N_UserContractDetail CD with(nolock) ON UC.Id = CD.UcId 
WHERE UC.UserId=1966 AND ISNULL(UC.IsUsed, 0) =1;

--��ʱ����(�)
SELECT * FROM Act_ActiveSet;

--ϵͳ��Լ
SELECT * FROM Act_Day15FHSet;
SELECT * FROM Act_Day15FHSet WHERE GroupId=3;

--���Ѽ�¼��
SELECT * FROM N_UserMoneyStatAll;

--ͳ���û�Id
SELECT UserCode, * FROM N_User;