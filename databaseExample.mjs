import { conifg } from 'dotenv-safe';
import postgres from 'postgres';
import { config } from 'process';

config();
const sql = postgres();
console.log(
  await sql`
  SELECT * FROM products`,
);
// this is just an example
await sql.end();
