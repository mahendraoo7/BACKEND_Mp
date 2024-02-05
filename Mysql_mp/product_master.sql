create table PRODUCT_MASTER (
  PRODUCTNO  varchar(20) primary key,
  DESCRIPTION varchar(20) not null,
  PROFITPERCENT int not null,
  UNITMESURE varchar(20)not null,
  QTYONHAND int not null,
  REORDERLVL int not null,
  SELLPRICE int not null,
  COSTPRICE int not null
);

insert into PRODUCT_MASTER(PRODUCTNO,DESCRIPTION,PROFITPERCENT,UNITMESURE,QTYONHAND,REORDERLVL,SELLPRICE,COSTPRICE)  value
("P00001","T-shirt",5,"Peice",200,50,350,250),
("P0345","Shirts",5,"Peice",150,50,500,350),
("P06734","Cotton Jeans",5,"Peice",100,20,600,450), 
("P07865","Jeans",5,"Peice",100,20,750,500),
("P07868","Trousers",2,"Peice",150,50,850,550),
("P07885","Pull Over",2.5,"Peice",80,30,700,450),
("P07965","Denim Shirts",4,"Peice",100,40,350,250),
("P07975","Lycra Tops",5,"Peice",70,30,300,175),
("P08865","Skirts",5,"Peice",75,30,450,300);