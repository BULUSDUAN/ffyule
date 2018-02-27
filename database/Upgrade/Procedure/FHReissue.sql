USE [Ticket]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

if (exists (select 1 from sys.objects where name = N'FHReissue'))
    drop proc FHReissue
go

--�ֺ첹��
CREATE PROCEDURE FHReissue
@logId int, --�ɷ���־Id
@result varchar(200) output
as
BEGIN
	BEGIN TRY
		DECLARE @userId INT, @parentId INT, @fhdate DATE, @money DECIMAL(18,4), @bet DECIMAL(18,4), @loss DECIMAL(18,4), @per DECIMAL(18,4)
		SELECT @userId=UserId, @parentId=ParentId, @fhdate=OperTime, @money=Money, @bet=Bet, @loss=Loss, @per=Per FROM Log_ContractOper WHERE id=@logId and allowed=1
                 
		
		DECLARE @startTime DATE, @endTime DATE, @day INT
		SELECT @endTime = @fhdate
		SELECT @day = DAY(@fhdate)
		IF @day = 10
			SET @startTime = CAST(CONVERT(NVARCHAR(8), DATEADD(m, -1, @fhdate), 120) + '26' AS DATE)
		ELSE
			SET @startTime = DATEADD(d, 15, @fhdate)
		
		IF @userId IS NULL OR @money IS NULL OR @money <= 0
		BEGIN
			SET @result = N'��Ч����'
			RETURN
		END
                     
		--�жϻ�Ƿ�����ȡ
		declare @isGet int
		select @IsGet=count(*) from Act_AgentFHRecord where UserId=@UserId and DATEDIFF(day,STime,@fhdate)=0
	
		if(@isGet>0)
		begin
			SET @result = N'��������ȡ��'
			return;
		end
		          
		BEGIN TRAN
		INSERT INTO [Act_AgentFHRecord]([UserId],[AgentId],[StartTime],[EndTime],[Bet],[Total],[Per],[InMoney],[STime],[Remark])
			VALUES(@userId,99,@startTime,@endTime,@bet,@loss,@per,@money,@fhdate,'��Լ�ֺ�')
		
		exec FHTranByDate @parentId, @userId,'ActFenHong',N'��Լ�ֺ�',@money,@fhdate,@result output

		UPDATE Log_ContractOper SET Allowed=0, Remark=N'�ֺ첹���ɹ�', STime=GETDATE() WHERE id=@logId and allowed=1
	    COMMIT TRAN  

		SET @result = N'' 
	END TRY
	BEGIN CATCH
		ROLLBACK TRAN
		SET @result = error_message()
	END CATCH
END