// import fs from 'node:fs';

import { sql } from './connect';

/* export const products1 = [
 // { id: 1, name: 'Strawberry', price: 1 },
 // { id: 2, name: 'Vanilla', price: 2 },
  { id: 3, name: 'Pistachio', price: 3 },
  { id: 4, name: 'Smurf', price: 4 },
];*/

export async function getProducts() {
  const products = await sql`
  SELECT * FROM products`;
  return products;
}
