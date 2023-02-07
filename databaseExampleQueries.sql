-- Creating a table

CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(30) NOT NULL,
  price VARCHAR(10) NOT NULL,
)
;

--Inserting products
INSERT INTO products
(name, price)
VALUES
( 'Strawberry' , 1 ),
( 'Vanilla' , 2 ),
( 'Pistachio', 3 ),
( 'Smurf' ,  4) ;

--Get all products
SELECT * FROM products;
