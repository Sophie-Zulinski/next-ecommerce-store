// import fs from 'node:fs';
import { cache } from 'react';
import { sql } from './connect';

/* export const products1 = [
 // { id: 1, name: 'Strawberry', price: 1 },
 // { id: 2, name: 'Vanilla', price: 2 },
  { id: 3, name: 'Pistachio', price: 3 },
  { id: 4, name: 'Smurf', price: 4 },
];*/

// get all animals
export const getProducts = cache(async () => {
  const products = await sql`
    SELECT * FROM products
  `;

  return products;
});

// get a single animal
export const getProduct = cache(async (id) => {
  const products = await sql`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return products[0];
});
