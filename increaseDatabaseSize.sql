Declare @SizeToIncreaseDatabaseBy Float = 0.5 --at .5 this should take a 1GB database and increase it to 1.5GB
DECLARE @NewCheckNumberTable TABLE
(
  CheckNumberVarient INT NOT NULL
)

insert into @NewCheckNumberTable(CheckNumberVarient) values (1000000)
insert into @NewCheckNumberTable(CheckNumberVarient) values (2000000)
insert into @NewCheckNumberTable(CheckNumberVarient) values (3000000)
insert into @NewCheckNumberTable(CheckNumberVarient) values (4000000)
insert into @NewCheckNumberTable(CheckNumberVarient) values (5000000)
insert into @NewCheckNumberTable(CheckNumberVarient) values (6000000)
insert into @NewCheckNumberTable(CheckNumberVarient) values (7000000)
insert into @NewCheckNumberTable(CheckNumberVarient) values (8000000)
insert into @NewCheckNumberTable(CheckNumberVarient) values (9000000)


Declare @Checks Table(
    [CheckDate] [datetime] NOT NULL,
	[CheckNo] [varchar](10) NOT NULL,
	[CheckType] [int] NOT NULL,
	[OrderNo] [varchar](20) NOT NULL,
	[OpenTime] [datetime] NOT NULL,
	[OpenStationNo] [int] NOT NULL,
	[OpenEmp] [int] NOT NULL,
	[Covers] [int] NOT NULL,
	[ItemTotal] [float] NOT NULL,
	[ModTotal] [float] NOT NULL,
	[ItemDiscTotal] [float] NOT NULL,
	[DiscStatus] [int] NOT NULL,
	[DiscTime] [datetime] NOT NULL,
	[DiscStationNo] [int] NOT NULL,
	[DiscEmp] [int] NOT NULL,
	[DiscNo] [int] NOT NULL,
	[DiscName] [nvarchar](50) NOT NULL,
	[DiscRate] [float] NOT NULL,
	[DiscAmount] [float] NOT NULL,
	[DiscTotal] [float] NOT NULL,
	[SurchargeRate] [float] NOT NULL,
	[SurchargeTotal] [float] NOT NULL,
	[GrandTotal] [float] NOT NULL,
	[RoundTotal] [float] NOT NULL,
	[IsPaid] [int] NOT NULL,
	[PayTime] [datetime] NOT NULL,
	[PayEmp] [int] NULL,
	[PayMethodNo] [varchar](450) NULL,
	[PayTotal] [float] NOT NULL,
	[ChangeAmount] [float] NULL,
	[Tips] [float] NULL,
	[PrintStatus] [int] NOT NULL,
	[IsVoid] [int] NOT NULL,
	[VoidTime] [datetime] NOT NULL,
	[VoidStationNo] [int] NOT NULL,
	[VoidEmp] [int] NOT NULL,
	[Id] [int],
	[Post] [int] NULL,
	[IsShipping] [bit] NOT NULL,
	[ClearingUnit] [decimal](19, 4) NOT NULL,
	[OrderName] [nvarchar](max) NULL,
	[LastActionOnUtc] [datetime] NOT NULL,
	[PreventAutomaticSurcharge] [bit] NOT NULL,
	[DiscountVoucherBarcode] [varchar](30) NULL,
	[paymentSurchargeTotal] [float] NULL,
	[Deposit] [float] NULL,
	[PaymentSystemSurchargeGst] [float] NULL,
	[CheckGst] [float] NULL,
	[CheckNumberVarient] varchar (10)
)
Declare @minCheckId int
Declare @maxCheckId int
Declare @numberOfChecksToSelect INT

select @minCheckId = MIN(Id) from tbl_check
select @maxCheckId = MAX(id) from tbl_check
set @numberOfChecksToSelect = (@maxCheckId - @minCheckId) * @SizeToIncreaseDatabaseBy


insert into 
	@Checks 
	select 
	  top (@numberOfChecksToSelect)	*
	from 
	tbl_check
	cross join
	@NewCheckNumberTable
	
	
declare @prefix varchar(2) = '00'
declare @prefix1 varchar(1) = '0'
--@prefix +  cast((cast(CheckNo as int) + cast(CheckNumberVarient as int)) as varchar(10))


insert into tbl_check (
	[CheckDate],
	[CheckNo],
	[CheckType],
	[OrderNo],
	[OpenTime],
	[OpenStationNo],
	[OpenEmp],
	[Covers],
	[ItemTotal],
	[ModTotal],
	[ItemDiscTotal],
	[DiscStatus],
	[DiscTime],
	[DiscStationNo],
	[DiscEmp],
	[DiscNo],
	[DiscName],
	[DiscRate],
	[DiscAmount],
	[DiscTotal],
	[SurchargeRate],
	[SurchargeTotal],
	[GrandTotal],
	[RoundTotal],
	[IsPaid],
	[PayTime],
	[PayEmp],
	[PayMethodNo],
	[PayTotal],
	[ChangeAmount],
	[Tips],
	[PrintStatus],
	[IsVoid],
	[VoidTime],
	[VoidStationNo],
	[VoidEmp],
	[Post],
	[IsShipping],
	[ClearingUnit],
	[OrderName],
	[LastActionOnUtc],
	[PreventAutomaticSurcharge],
	[DiscountVoucherBarcode],
	[paymentSurchargeTotal],
	[Deposit],
	[PaymentSystemSurchargeGst],
	[CheckGst])
select
    [CheckDate],
	case When LEN(cast((cast(CheckNo as int) + cast(CheckNumberVarient as int)) as varchar(10))) = 10
		Then cast((cast(CheckNo as int) + cast(CheckNumberVarient as int)) as varchar(10))
	 When LEN(cast((cast(CheckNo as int) + cast(CheckNumberVarient as int)) as varchar(10))) = 9
	    Then @prefix1 +  cast((cast(CheckNo as int) + cast(CheckNumberVarient as int)) as varchar(10))
	 When LEN(cast((cast(CheckNo as int) + cast(CheckNumberVarient as int)) as varchar(10))) = 8
	    Then @prefix +  cast((cast(CheckNo as int) + cast(CheckNumberVarient as int)) as varchar(10))
	end,	
	[CheckType],
	[OrderNo],
	[OpenTime],
	[OpenStationNo],
	[OpenEmp],
	[Covers],
	[ItemTotal],
	[ModTotal],
	[ItemDiscTotal],
	[DiscStatus],
	[DiscTime],
	[DiscStationNo],
	[DiscEmp],
	[DiscNo],
	[DiscName],
	[DiscRate],
	[DiscAmount],
	[DiscTotal],
	[SurchargeRate],
	[SurchargeTotal],
	[GrandTotal],
	[RoundTotal],
	[IsPaid],
	[PayTime],
	[PayEmp],
	[PayMethodNo],
	[PayTotal],
	[ChangeAmount],
	[Tips],
	[PrintStatus],
	[IsVoid],
	[VoidTime],
	[VoidStationNo],
	[VoidEmp],
	[Post],
	[IsShipping],
	[ClearingUnit],
	[OrderName],
	[LastActionOnUtc],
	[PreventAutomaticSurcharge],
	[DiscountVoucherBarcode],
	[paymentSurchargeTotal],
	[Deposit],
	[PaymentSystemSurchargeGst],
	[CheckGst]
from 
@Checks


insert into tbl_item(
		CheckDate, 
		CheckNo, 
		OrderTime, 
		OrderStationNo, 
		OrderEmp, 
		ItemIdx, 
		[Type], 
		Qty, 
		OldQty, 
		ParentItemIdx, 
		ItemModNo, 
		ItemModName1, 
		ItemModName2, 
		ItemModKitchenName, 
		AdjustmentNo, 
		AdjustmentName1, 
		AdjustmentName2, 
		AdjustmentKitchenName, 
		PricePeriod, 
		PriceLevel, 
		GST, 
		UnitPrice, 
		ItemPrice, 
		ModPrice, 
		DiscStatus, 
		DiscNo, 
		DiscName, 
		DiscRate, 
		DiscAmount, 
		DiscTotal, 
		DiscTime, 
		DiscStationNo, 
		DiscEmp, 
		PrintQ1, 
		PrintQ2, 
		PrintQ3, 
		PrintQ4, 
		PrintQ5, 
		IsPrintOnCheck, 
		Course, 
		PrintStatus, 
		Dept, 
		Cat, 
		Cost, 
		Stock, 
		StockCheck, 
		IsVoid, 
		VoidTime, 
		VoidStationNo, 
		VoidEmp, 
		SeatNo, 
		CheckId, 
		PrintQ6, 
		PrintQ7, 
		PrintQ8, 
		PrintQ9, 
		PrintQ10, 
		PrintQ11, 
		PrintQ12, 
		PrintQ13, 
		PrintQ14, 
		PrintQ15, 
		PrintQ16, 
		PrintQ17, 
		PrintQ18, 
		PrintQ19, 
		PrintQ20, 
		VoidReasonId, 
		VoidReasonNotes, 
		VoidDecrementStock, 
		UsedInDealGroup, 
		IsDealGroupItem, 
		DealGroupMenuItemId, 
		LastActionOnUtc, 
		DiscountVoucherBarcode)
		select 
		i.CheckDate, 
		case When LEN(cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))) = 10
			Then cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))
		 When LEN(cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))) = 9
			Then @prefix1 +  cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))
		 When LEN(cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))) = 8
			Then @prefix +  cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))
		end, 
		i.OrderTime, 
		i.OrderStationNo, 
		i.OrderEmp, 
		i.ItemIdx, 
		i.[Type], 
		i.Qty, 
		i.OldQty, 
		i.ParentItemIdx, 
		i.ItemModNo, 
		i.ItemModName1, 
		i.ItemModName2, 
		i.ItemModKitchenName, 
		i.AdjustmentNo, 
		i.AdjustmentName1, 
		i.AdjustmentName2, 
		i.AdjustmentKitchenName, 
		i.PricePeriod, 
		i.PriceLevel, 
		i.GST, 
		i.UnitPrice, 
		i.ItemPrice, 
		i.ModPrice, 
		i.DiscStatus, 
		i.DiscNo, 
		i.DiscName, 
		i.DiscRate, 
		i.DiscAmount, 
		i.DiscTotal, 
		i.DiscTime, 
		i.DiscStationNo, 
		i.DiscEmp, 
		i.PrintQ1, 
		i.PrintQ2, 
		i.PrintQ3, 
		i.PrintQ4, 
		i.PrintQ5, 
		i.IsPrintOnCheck, 
		i.Course, 
		i.PrintStatus, 
		i.Dept, 
		i.Cat, 
		i.Cost, 
		i.Stock, 
		i.StockCheck, 
		i.IsVoid, 
		i.VoidTime, 
		i.VoidStationNo, 
		i.VoidEmp, 
		i.SeatNo, 
		case When LEN(cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))) = 10
			then (select che.Id from tbl_check che where che.CheckDate = i.CheckDate and che.CheckNo =  (cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))))
		 When LEN(cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))) = 9
			Then (select che.Id from tbl_check che where che.CheckDate = i.CheckDate and che.CheckNo =  (@prefix1 +  cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))))
		 When LEN(cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))) = 8
			Then (select che.Id from tbl_check che where che.CheckDate = i.CheckDate and che.CheckNo =  (@prefix +  cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))))
		end, 
		i.PrintQ6, 
		i.PrintQ7, 
		i.PrintQ8, 
		i.PrintQ9, 
		i.PrintQ10, 
		i.PrintQ11, 
		i.PrintQ12, 
		i.PrintQ13, 
		i.PrintQ14, 
		i.PrintQ15, 
		i.PrintQ16, 
		i.PrintQ17, 
		i.PrintQ18, 
		i.PrintQ19, 
		i.PrintQ20, 
		i.VoidReasonId, 
		i.VoidReasonNotes, 
		i.VoidDecrementStock, 
		i.UsedInDealGroup, 
		i.IsDealGroupItem, 
		i.DealGroupMenuItemId, 
		i.LastActionOnUtc, 
		i.DiscountVoucherBarcode
		from 
		  tbl_item i
		  inner join
		  @Checks c
		  on 
		  i.CheckId = c.Id
		  		  
		  
		insert into tbl_payment(
			CheckDate,
			CheckNo,
			PayIdx,
			PayTime,
			PayStationNo,
			PayEmp,
			PayMethodNo,
			PayTotal,
			ChangeAmount,
			Tips,
			IsVoid,
			VoidTime,
			VoidStationNo,
			VoidEmp,
			MemberID,
			PaymentSystemId,
			PaymentSystemTransactionId,
			LastActionOnUtc,
			paymentSurchargeId,
			PaymentSurchargeAmount,
			PaymentSurchargeRate
		)
		select 
			p.CheckDate,
			case When LEN(cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))) = 10
				Then cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))
			 When LEN(cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))) = 9
				Then @prefix1 +  cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))
			 When LEN(cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))) = 8
				Then @prefix +  cast((cast(c.CheckNo as int) + cast(c.CheckNumberVarient as int)) as varchar(10))
			end, 
			p.PayIdx,
			p.PayTime,
			p.PayStationNo,
			p.PayEmp,
			p.PayMethodNo,
			p.PayTotal,
			p.ChangeAmount,
			p.Tips,
			p.IsVoid,
			p.VoidTime,
			p.VoidStationNo,
			p.VoidEmp,
			p.MemberID,
			p.PaymentSystemId,
			p.PaymentSystemTransactionId,
			p.LastActionOnUtc,
			p.paymentSurchargeId,
			p.PaymentSurchargeAmount,
			p.PaymentSurchargeRate 
		from
			tbl_payment p
			inner join 
			@Checks c
			on 
			c.CheckDate = p.CheckDate
			and 
			c.CheckNo = p.CheckNo 
			
			
			
 SET XACT_abort OFF
DECLARE @DatabaseID smallint -- database name 
DECLARE @DatabaseName varchar(50)
DECLARE @LogName varchar(50)

DECLARE db_cursor CURSOR FOR 
SELECT [dbid], name
FROM master.dbo.sysdatabases 
WHERE name NOT IN ('master','model','msdb','tempdb') 

OPEN db_cursor  
FETCH NEXT FROM db_cursor INTO @DatabaseID, @DatabaseName

WHILE @@FETCH_STATUS = 0  
BEGIN  

		IF (SELECT state_desc
		FROM sys.master_files
		WHERE database_id = @DatabaseID
		AND (type = 0)) <> 'ONLINE'
		BEGIN
			FETCH NEXT FROM db_cursor INTO @DatabaseID, @DatabaseName
			continue
		END

		SELECT TOP 1 @LogName = name
		FROM sys.master_files
		WHERE database_id = @DatabaseID
		AND (type = 1)
		
		EXEC ('USE [' + @DatabaseName + ']; ALTER DATABASE ['+ @DatabaseName +'] SET RECOVERY SIMPLE WITH NO_WAIT; DBCC SHRINKFILE('+ @LogName +', 1); ALTER DATABASE ['+ @DatabaseName +'] SET RECOVERY SIMPLE WITH NO_WAIT')
       FETCH NEXT FROM db_cursor INTO @DatabaseID, @DatabaseName
END  

CLOSE db_cursor  
DEALLOCATE db_cursor