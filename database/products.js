//import fs from 'node:fs';
import { allowedNodeEnvironmentFlags } from 'process';
import { sql } from './connect';

export const products = [
  { id: 1, name: 'Gumtree', price: 5 },
  { id: 2, name: 'Lilac', price: 10 },
  { id: 3, name: 'Succulents', price: 20 },
  { id: 4, name: 'Poppy', price: 50 },
];

export async function getProducts() {
  const products = await sql`
  SELECT * FROM animals`;
  return products;
}
