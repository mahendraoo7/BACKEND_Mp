-- #1

select cm.CLIENTNO , pm.PRODUCTNO , cm.name , pm.DESCRIPTION from client_master cm 
inner join product_master pm on cm.name = "Ivan Bayross";

-- 2 	

select pm.DESCRIPTION , sod.QTYORDERED , so.DELYDATE from product_master pm 
inner join sales_order_details sod on pm.PRODUCTNO = sod.PRODUCTNO
inner join sales_order so on so.DELYDATE = month(current_date());

-- 3 

select pm.PRODUCTNO , pm.description from sales_order_details sod inner join product_master pm where QTYORDERED > 9 ; 

-- 4

select cm.name, pm.Description from sales_order_Details sod
inner join sales_order so on so.ORDERNO = sod.ORDERNO
inner join client_master cm on so.CLIENTNO = cm.CLIENTNO
inner join product_master pm on Description = "Trousers";

-- 5

select so.orderno ,cm.name , sod.QTYORDERED , pm.description from sales_order_details sod
inner join sales_order so on so.ORDERNO = sod.ORDERNO 
inner join client_master cm on so.CLIENTNO = cm.CLIENTNO
inner join product_master pm on pm.PRODUCTNO = sod.PRODUCTNO
where pm.DESCRIPTION = "pull over" and sod.QTYORDERED <5 ;

-- 6

select sod.*, cm.name, pm.DESCRIPTION from sales_order_details sod 
inner join sales_order so on so.ORDERNO = sod.ORDERNO 
inner join client_master cm on so.CLIENTNO = cm.CLIENTNO
inner join product_master pm on sod.productno = pm.PRODUCTNO
where cm.name in ("Ivan bayross", "Mamta Muzumdar");



-- 7 

select cm.name, pm.Description, sod.QTYORDERED from sales_order_details sod
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.productno = pm.productno where cm.ClientNo in ('C00001','C00002');



                                                                                                                                              