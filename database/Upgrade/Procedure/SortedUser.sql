USE Ticket
GO




IF EXISTS(SELECT 1 FROM tempdb..sysobjects WHERE id=OBJECT_ID('tempdb..#TUser'))
	DROP TABLE #TUser;

--id: �û�Id, parentId: ��Id, orderId: �����
CREATE TABLE #TUser(id INT, parentId INT, ordered INT IDENTITY, level INT);

DECLARE @last INT = 0, --��һ����ʱ���¼��
		@current INT = 0, --��ǰ��ʱ���¼��
		@level INT =0	--ִ�д���

--�����û����ڵ��¼
SET @level = 0
INSERT INTO #TUser(id, parentId, level)
	SELECT Id, 0, @level FROM N_User WHERE ISNULL(IsDel, 0) = 0 AND ParentId = 0;
SELECT @current = count(1) FROM #TUser;

WHILE(@last != @current)
BEGIN
	SET @last = @current;
	
	--������һ���û�
	INSERT INTO #TUser(id, parentId, level)
		SELECT U.Id, T.Id, @level + 1 FROM N_User U, #TUser T WHERE U.ParentId = T.Id AND ISNULL(U.IsDel, 0) = 0 AND T.level = @level;
	
	SELECT @current = count(1) FROM #TUser;
	SET @level = @level + 1
END

SELECT * FROM #TUser;

IF EXISTS(SELECT 1 FROM tempdb..sysobjects WHERE id=OBJECT_ID('tempdb..#TUser'))
	DROP TABLE #TUser;