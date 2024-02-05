select so.ORDERNO, cm.name, sm.SALESMANNAME from sales_order so
inner join client_master cm on so.CLIENTNO = cm.CLIENTNO
inner join salesman_master sm on so.SALESMANNO = sm.SALESMANNO;
	
-- 1  
select sod.ORDERNO, pm.DESCRIPTION, cm.NAME from sales_order_details sod
inner join product_master pm on pm.PRODUCTNO = sod.PRODUCTNO
inner join sales_order so on so.ORDERNO = sod.ORDERNO
inner join client_master cm on so.CLIENTNO = cm.CLIENTNO ;



select distinct pm.PRODUCTNO, pm.DESCRIPTION from sales_order_details sod
inner join product_master pm on pm.PRODUCTNO = sod.PRODUCTNO;
