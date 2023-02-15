import { config } from 'node:process';
import postgres from 'postgres';

config();
const sql = postgres();
console.log(
  await sql`
  SELECT * FROM products`,
);
// this is just an example
await sql.end();
