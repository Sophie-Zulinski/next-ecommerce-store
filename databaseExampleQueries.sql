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
( 'Gumtree' , 5 ),
( 'Lilac' , 10 ),
( 'Succulents', 20 ),
( 'Poppy' ,  50) ;

--Get all animals
SELECT * FROM products;
