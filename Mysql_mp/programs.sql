select * from employees;

select * from employees where jobTitle = 'sales Rep' and employeeNumber Between 1200 and 1500;

select * from employees where not jobTitle = 'sales Rep' and officeCode >=2;

select * from customers where not country = 'usa';

select * from customers where not customerNumber Between 150 and 200;

select firstname, lastname as 'Name of the employee' from employees order by lastname asc;

select * from customers where creditLimit>=70000 order by contactLastName  desc;

select *from customers where city in ('singapore','Liverpool','NYC');

select * from customers where contactLastName ='SMITH' ;

select * from employees where officeCode in (1,2,5);

select * from customers where creditLimit between 50000 and 95000 ;

select * from employees where officeCode not in (1,3) ;	

select * from customers  where contactFirstName like 's%' ;

select * from customers  where contactLastName like 's%h' ;

select * from customers  where contactFirstName like 's____' ;

select * from customers where contactFirstName like '_________';

select * from customers where customerName like 'a%e';

select * from customers where contactLastName like 'ee%';

select jobTitle,count(jobTitle) from employees group by jobTitle ;

select state, max(creditLimit) from customers group by state ;	

select city,min(creditlimit) from customers group by city  ;

create table client_master (ID varchar(10) unique primary key,name varchar(20) not null ,date int ,time int);

desc client_master ;

insert into client_master (ID,name,date,time)value
("P01)","narayan patel",06-01-2023,2),
("P02","Rahul Dodiya",06-01-2023,3),
("P03","Mehul",06-01-2023,5),
("P04","Raghav  ",06-01-2023,4);


show tables ;

select * from client_master ;

drop table client_master ;




drop table client_master ;

show tables ;

select * from client_master ;









