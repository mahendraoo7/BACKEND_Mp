 \sql

 \connect root@localhost:3306

 create database BACKEND;
   
 show database BACKEND;

 use BACKEND;

 show tables;

 create table user(
    id int,
    firstname varchar(20),
    lastname varchar(30),
    gender varchar(20),
    email varchar(20),
    mobileNo int

 );


 describe user;
 desc user;

 insert into user(id,firstname,lastname,gender,email,mobileNo) value (1,'girish','gondaliya','male','girish@test.in',123456789);

 insert into user (id,firstname,lastname,gender,email,mobileNo) value 
 (2,'Narendra',"Lal","Male","narendra@test.in",123456789),
 (3,'Aadity',"Nath","Male","aadity@test.in",123456789),
 (3,'monika',"Sojitra","Female","monika@test.in",123456789),
 (4,'Srusti',"Kanthariya","Female","srusti@test.in",12345678889),
 (5,'Vijay',"Lalani","Male","vijay@test.in",123456789);
 

 insert into user value (6,'Janil',"Kakdiya","Male","jenil@test.in",123456789);

--  skip some column data

 insert into user (id,firstname,lastname,gender,mobileNo) value 
 (9,'Krish',"Rangani","male",123456789),
 (10, 'Mahendra',"Purohit","Male",123456789);


 insert into user value 
 (11,'Vrishabh',"jogani","Male",1234556789);  

 --select * from user


 create table CLIENT_MASTER(
   CLIENTNO varchar(10),
   NAME varchar(20), 
   ADDRESS1 varchar(30), 
   ADDRESS2 varchar(30),
   CITY varchar(10),
   PINCODE int,
   STATE varchar(10),
   BALDUE int
);


         insert into CLIENT_MASTER (CLIENTNO,NAME,CITY,PINCODE,STATE,BALDUE) value
 ('C00001','Ivan Bayross',"mumbai",400054,"Maharastra",15000),
 ('C00002','Mamta Muzumdar',"Madras",780001,"Tamilnadu",0),
 ('C00003','Chhaya benkar ',"Mumbai",400057,"Maharastra",5000),
 ('C00004','Ashvini Joshi',"Bangalore",560001,"Karnataka",0),
 ('C00005','Hasel Colaco',"mumbai",400060,"Maharastra",2000),
 ('C00006','Deepak Sharma',"Mangalore",560050,"Karnataka",0);


create table PRODUCT_MASTER (
  PRODUCTNO  varchar(20),
  DESCRIPTION varchar(20),
  PROFITPERCENT int,
  UNITMESURE varchar(20),
  QTYONHAND int,
  REORDERLVL int,
  SELLPRICE int,
  COSTPRICE int
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


create table SALESMAN_MASTER (
  SALESMANNO varchar(6),
  SALESMANNAME varchar(20),
  ADDRESS1 varchar(30),
  ADDRESS2 varchar(30),
  CITY varchar(20),
  PINCODE int,
  STATE varchar(20),
  SALAMT int,
  TGTTOGET int,
  YTDSALES int,
  REMARKS varchar(60)
);


insert into SALESMAN_MASTER (SALESMANNO,SALESMANNAME,ADDRESS1,ADDRESS2,CITY,PINCODE,STATE,SALAMT,TGTTOGET,YTDSALES,REMARKS) value
("S00001","Aman","A/14","Worli","Mumbai",400002,"Maharastra",3000,100,50,"Good"),
("S00002","omkar","65","Nariman","Mumbai",400001,"Maharastra",3000,200,100,"Good"),
("S00003","Raj","P-7","Bandra","Mumbai",400032,"Maharastra",3000,200,100,"Good"),
("S00004","Ashish","A/5","Juhu","Mumbai",400044,"Maharastra",3500,200,150,"Good");


-- 03--01-2024


select name, city from client_master;
select *,city from client_master;
select name as "Full Name ", from client_master ;
select name as "Full Name ", city "District" from client_master;



-- where clause 


select * from client_master where city = "mumbai";
select * from client_master where baldue < 5000;
select * from client_master where baldue >=5000;
select * from client_master where baldue = 5000;


--  Order by 

 select * from client_master order by city desc, baldue asc;
 select * from client_master order by city desc;


-- update Query  

update client_master set baldue = 1000 // All record update 
update client_master set baldue =1000, city = "Navi Mumbai" where baldue =0;

-- Delete Query 

delete from client_master ;
delete cliemt_master where address1 = "66";

-- drop statment

drop table client_master ;    
drop table node_8am;


  

