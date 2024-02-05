create table SALES_ORDER (
  ORDERNO varchar(6) primary key,
  CLIENTNO varchar(6),
  foreign key(CLIENTNO) REFERENCES client_master(CLIENTNO),
  ORDERDATE DATE not null,
  DELYADDR varchar(25),
  SALESMANNO varchar(6),
  foreign key(SALESMANNO) REFERENCES salesman_master(SALESMANNO),
  DELYTYPE char(1),
  BILLYN char(1),
  DELYDATE DATE,
  ORDERSTATUS varchar(10),
);

insert into SALES_ORDER(ORDERNO,CLIENTNO,ORDERDATE,SALESMANNO,DELYTYPE,BILLYN,DELYDATE,ORDERSTATUS) value
('O19001','C00001','2004-06-12','S00001','F','N','2002-07-20','In Process'),
('O19002','C00002','2004-06-25','S00002','P','N','2002-06-27','Cancelled'),
('O46865','C00003','2004-02-18','S00003','F','Y','2002-02-20','Fulfilled'),
('O19003','C00001','2004-04-03','S00001','F','Y','2002-04-07','Fulfilled'),
('O46866','C00004','2004-05-20','S00002','P','N','2002-05-22','Cancelled'),
('O19008','C00005','2004-05-24','S00004','F','N','2002-07-26','InProcess'); 



