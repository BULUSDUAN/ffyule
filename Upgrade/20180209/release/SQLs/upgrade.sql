USE Ticket;
GO

--������Լ�Ƿ���Ч
IF EXISTS(SElECT 1 FROM dbo.SYSOBJECTS WHERE Id = OBJECT_ID(N'N_UserContractDetail') AND XType = N'U')
	AND NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID(N'N_UserContractDetail') AND name = N'Effective')
	ALTER TABLE N_UserContractDetail ADD Effective BIT DEFAULT(0);
GO

--��������Ч����ԼId
UPDATE B SET B.Effective=1 FROM N_UserContract A, N_UserContractDetail B WHERE A.Id = B.UcId AND ISNULL(A.IsUsed, 0)=1;
GO
