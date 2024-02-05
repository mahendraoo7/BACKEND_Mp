create table CLIENT_MASTER(
   CLIENTNO varchar(10) primary key,
   NAME varchar(20)  not null, 
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
