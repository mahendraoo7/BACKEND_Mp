use program ;

select 	so.*,cm.name from sales_order so , client_master cm where so.clientno = cm.clientno ;

select so.* , cm.name from sales_order so inner join client_master cm on so.clientno = cm.clientno ;
 
select so.* , cm.name from sales_order so left join client_master cm on so.clientno order by cm.city desc ;

select so.*	,cm.name from sales_order so left join client_master cm on so.clientno order by cm.city desc ;





