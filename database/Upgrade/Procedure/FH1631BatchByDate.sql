USE [Ticket]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

if (exists (select 1 from sys.objects where name = N'FH1125BatchByDate'))
    drop proc FH1125BatchByDate
go


if (exists (select 1 from sys.objects where name = N'FH1631BatchByDate'))
    drop proc FH1631BatchByDate
go

/*
	结算当月16号到当月最后一天的分红
	@fhdate: 结算日期
*/
CREATE PROCEDURE FH1631BatchByDate
	@fhdate DateTime --分红结算日期
AS
BEGIN
	/** 1, 按用户层级由高到低生成用户临时表 Start**/
	--删除临时表
	IF EXISTS(SELECT 1 FROM tempdb..sysobjects WHERE id=OBJECT_ID('tempdb..#TUser'))
		DROP TABLE #TUser;
	
	
	--id: 用户Id, parentId: 父Id, orderId: 排序号
	CREATE TABLE #TUser(id INT, parentId INT, fhUserId INT, userGroup INT, ordered INT IDENTITY, level INT);

	DECLARE @groupLevel INT = 2--会员级别

	--从直属一级开始发放, 直属一级由平台直接下发
	SET @groupLevel = 2

	WHILE @groupLevel >= 0
	BEGIN 
		INSERT INTO #TUser(id, parentId, fhUserId, userGroup, level)
			SELECT U.Id, U.ParentId,
					CASE WHEN UserGroup = 2 THEN 0 ELSE U.ParentId END,  --0表示平台
					@groupLevel, 
					U.UserGroup FROM N_User U
			WHERE ISNULL(IsDel, 0) = 0 AND UserGroup = @groupLevel;
		

		SET @groupLevel = @groupLevel - 1
	END
	
	/** 按用户层级由高到低生成用户临时表 End**/
	
	/** 2, 层级由高到底为用户派发当月16号到当月最后一天的分红 Start**/
	DECLARE @contractId INT,--临时变量，用来保存游标值
			@userId INT,		--用户Id
			@userGroup INT,		--用户组
			@fhUserId INT	--派发分红的用户id
	DECLARE @result varchar(200) --执行结果
	
	DECLARE @logTitle NVARCHAR(100) --日志
	SET @logTitle = N'发放' + CONVERT(NVARCHAR(8), @fhdate, 112) + N'分红'

	BEGIN TRY		
		BEGIN TRAN --申明事务
		
		DECLARE @ucount INT, @idx INT
		SELECT @idx = 1
		SELECT @ucount = COUNT(1) FROM #TUser
	
		WHILE @idx <= @ucount
		BEGIN
			SELECT @userId = id, @fhUserId = fhUserId, @userGroup = userGroup FROM #TUser WHERE ordered = @idx;
			
			--获取契约
			IF @userGroup = 2 
				SET @contractId = 0 --默认直属系统契约
			ELSE
			BEGIN
				SELECT 
					@contractId = Id, 
					@userId = userId, 
					@fhUserId=parentId 
				FROM [N_UserContract] WHERE Type=1 AND isUsed=1 AND UserId = @userId
			END
			
			--执行sql操作
			IF @contractId IS NOT NULL
			BEGIN
				exec FH1631OperByDate @userId, @userGroup, @fhUserId, @contractId, @fhdate, @result output
			END			
			
			SET @fhUserId = NULL
			SET @contractId = NULL
			SET @userGroup = NULL
			SET @userId = NULL
			SET @idx = @idx + 1
		END

		--添加日志
		INSERT INTO Log_Sys(UserId, Title, Content, STime) VALUES(0, @logTitle, N'系统自动派发完成', GETDATE());
		
		COMMIT TRAN--提交事务
	END TRY
	BEGIN CATCH
		rollback tran--回滚
		
		--添加错误日志
		INSERT INTO Log_Sys(UserId, Title, Content, STime) VALUES(@userId, @logTitle, Error_Message(), GETDATE());
	END CATCH
	/** 层级由高到底为用户派发当月16号到当月最后一天的分红 End**/
	
	--3, 删除临时表
	IF EXISTS(SELECT 1 FROM tempdb..sysobjects WHERE id=OBJECT_ID('tempdb..#TUser'))
		DROP TABLE #TUser;
END
