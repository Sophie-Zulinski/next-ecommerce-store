export async function up(sql) {
  await sql`
  CREATE TABLE products (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(30) NOT NULL,
    price VARCHAR(10) NOT NULL
  )
`;
}

export async function down(sql) {
  await sql`
  DROP TABLE products
  `;
}
