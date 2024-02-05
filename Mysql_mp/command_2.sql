use classicmodels;

select * from customers;

select * from customers where postalCode < 5000;

select * from customers where country = 'USA';

select * from customers where country in ('USA','germany');	

select * from customers limit 3;

select * from customers where country= 'USA' or country= 'Germany' or country = 'italy';

select * from customers where country = 'USA' or customerNumber < 400 ;

select * from employees;

select * from employees where employeeNumber <1100 ;

select * from employees where firstname like 'm%' ;

select * from employees where firstname like '%m' ;

select * from employees where firstname like '_a%' ;

select * from customers where customerName like '%d_' ;

select * from customers where customerName like '%ab%' ;

select * from customers where city like  '_o___';

select * from customers where customerName like '%model%';

select * from customers where customerName like 'mini%co.';

select * from customers ;

select * from customers where phone like '11%';	






 




