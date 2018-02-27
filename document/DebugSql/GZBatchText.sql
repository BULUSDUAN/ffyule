USE [Ticket]
GO

DECLARE @sdate DATETIME = '2018-02-23' --��ʼ����
DECLARE @edate DATETIME = '2018-02-24' --��������
DECLARE @parentId INT = 1961 --������ԱId
DECLARE @gzdate DATE  --���ʷ�������

IF EXISTS(SELECT 1 FROM tempdb..sysobjects WHERE id=OBJECT_ID('tempdb..#TRecord'))
	DROP TABLE #TRecord;

IF EXISTS(SELECT 1 FROM tempdb..sysobjects WHERE id=OBJECT_ID('tempdb..#TGzDate'))
	DROP TABLE #TGzDate;

IF @sdate > @edate
	SET @edate = @sdate

CREATE TABLE #TGzDate(Id INT IDENTITY, GzDate DATE);

SET @gzdate = @sdate
WHILE @gzdate <= @edate 
BEGIN
	INSERT INTO #TGzDate(GzDate) VALUES(@gzdate)

	SET @gzdate = DATEADD(d, 1, @gzdate)
END

--SELECT * FROM #TGzDate
	
--��ԱId, ��Ա����, ����, ����, ���, ��ע, �������, ��ԼId
CREATE TABLE #TRecord(Id INT IDENTITY, UserId INT, UserName NVARCHAR(100), Bet DECIMAL(18,4), InMoney DECIMAL(18,4), Money DECIMAL(18,4), Remark NVARCHAR(100), State INT, UcId INT, STime DATE);

INSERT INTO #TRecord(UserId, UserName, Money, UcId, Bet, InMoney, State, Remark, STime)
	SELECT U.Id, U.UserName, U.Money, C.Id, R.Bet, R.InMoney, CASE WHEN R.SsId IS NULL THEN 0 ELSE 1 END, R.Remark, D.GzDate
	FROM N_User U
		INNER JOIN #TGzDate D ON 1 > 0
		INNER JOIN N_UserContract C ON U.Id=C.UserId AND C.Type=2 AND C.IsUsed=1
		LEFT JOIN Act_ActiveRecord R ON R.UserId=U.Id and R.ActiveType = 'ActGongziContract' and DATEDIFF(day, R.STime, D.GzDate) = 0
	WHERE ISNULL(U.IsDel, 0) = 0 AND U.ParentId = @parentId
	ORDER BY U.Id ASC;
		

SELECT * FROM #TRecord;

DECLARE @userId INT, @ucId INT, @state INT
DECLARE @count INT, @idx INT = 1
SELECT @count = count(1) FROM #TRecord;


DECLARE @bet decimal(18,4),
		@money decimal(18,4),
		@remark NVARCHAR(100)

WHILE @idx <= @count
BEGIN
	SET @bet = 0
	SET @money = 0
	SET @remark = N''

	SELECT @userId = UserId, @ucId = UcId, @state = State FROM #TRecord WHERE Id=@idx;

	IF @state != 0
	BEGIN
		SELECT @bet=isnull(cast(round((isnull(Sum(bet),0)-isnull(Sum(Cancellation),0)),4) as numeric(20,4)),0) FROM [N_UserMoneyStatAll] a 
		WHERE dbo.f_GetUserCode(UserId) like '%,'+@userId+',%'  and DateDiff(dd, STime, @gzdate) = 0 
				
		SELECT TOP 1 @money = cast(round([Money] * @bet * 0.01,4) as numeric(10,4)) FROM N_UserContractDetail 
			WHERE UcId=@ucId and Money > 0 and @bet >= MinMoney*10000 order by Id desc
			--�ɷ�����

		IF @money <= 0
			SET @remark = N'δ���㹤����Լ�������'
		ELSE
			Ӧ��ȡ����' + CONVERT(Nvarchar(100),@money)

		UPDATE 
	END

	SET @idx = @idx + 1
END	
/** ���û��㼶�ɸߵ��������û���ʱ�� End**/

/** 2, �㼶�ɸߵ���Ϊ�û��ɷ����� Start**/
DECLARE @error int = 0 --���������
DECLARE @contractId varchar(50),--��ʱ���������������α�ֵ
		@userId varchar(50)		--�û�Id
DECLARE @result varchar(200) --ִ�н��

DECLARE @logTitle NVARCHAR(100) --��־
SET @logTitle = N'����' + CONVERT(NVARCHAR(8), @gzdate, 112) + N'����'
	
BEGIN TRY		
	BEGIN TRAN --��������
		
	DECLARE @ucount INT, @idx INT
	SELECT @idx = 1
	SELECT @ucount = COUNT(1) FROM #TUser
	
	WHILE @idx <= @ucount
	BEGIN
		SELECT @userId = id FROM #TUser WHERE ordered = @idx;
		
		--��ȡ��Լ
		SELECT @contractId = Id FROM [N_UserContract] WHERE Type=2 AND isUsed=1 AND UserId = @userId
			
		--ִ��sql����
		IF @contractId IS NOT NULL
		BEGIN
			exec GZOperByDate @contractId, @gzdate, @result output

			--�����־
			INSERT INTO Log_Sys(UserId, Title, Content, STime) VALUES(@userId, @logTitle, @result, GETDATE());
		END
			
		SET @contractId = NULL
		SET @idx = @idx + 1
	END
		
	COMMIT TRAN--�ύ����
END TRY
BEGIN CATCH
	rollback tran--�ع�����
		
	--��Ӵ�����־
	INSERT INTO Log_Sys(UserId, Title, Content, STime) VALUES(@userId, @logTitle, Error_Message(), GETDATE());
END CATCH
/** �㼶�ɸߵ���Ϊ�û��ɷ����� End**/
	
--4, ɾ����ʱ��
IF EXISTS(SELECT 1 FROM tempdb..sysobjects WHERE id=OBJECT_ID('tempdb..#TUser'))
	DROP TABLE #TUser;

