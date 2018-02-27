USE [Ticket]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

if (exists (select 1 from sys.objects where name = N'GZReissue'))
    drop proc GZReissue
go

--���ʲ���
CREATE PROCEDURE GZReissue
@logId int, --�ɷ���־Id
@result varchar(200) output
as
BEGIN
	BEGIN TRY
		DECLARE @userId INT, @parentId INT, @gzdate DATE, @money DECIMAL(18,4), @bet DECIMAL(18,4)
		SELECT @userId=UserId, @parentId=ParentId, @gzdate=OperTime, @money=Money, @bet=Bet FROM Log_ContractOper WHERE id=@logId and allowed=1
                            
		IF @userId IS NULL OR @money IS NULL OR @money <= 0
		BEGIN
			SET @result = N'��Ч����'
			RETURN
		END
                            
		DECLARE @isGet INT
		select @isGet=count(*) from Act_ActiveRecord where UserId=@userId and ActiveType = 'ActGongziContract' and DATEDIFF(day, STime, @gzdate) = 0
    
		if(@isGet>0)
		begin
			SET @result = N'��������ȡ��'
			return;
		end
		          
		BEGIN TRAN
		exec GZTranByDate @parentId, @userId, 'ActGongziContract', N'��Լ����', @bet, @money, @gzdate, N'���ʲ���', @result output

		UPDATE Log_ContractOper SET Allowed=0, Remark=N'���ʲ����ɹ�', STime=GETDATE() WHERE id=@logId and allowed=1
	    COMMIT TRAN  

		SET @result = N'' 
	END TRY
	BEGIN CATCH
		ROLLBACK TRAN
		SET @result = error_message()
	END CATCH
END