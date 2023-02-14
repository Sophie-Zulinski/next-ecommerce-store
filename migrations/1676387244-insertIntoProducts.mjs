const products = [
  { id: 1, name: 'Strawberry', price: 1 },
  { id: 2, name: 'Vanilla', price: 2 },
  { id: 3, name: 'Pistachio', price: 3 },
  { id: 4, name: 'Smurf', price: 4 },
];

export async function up(sql) {
  await sql`
 INSERT INTO products
${sql(products, 'name', 'price')}
`;
}

export async function down(sql) {
  for (const product of products) {
    await sql`
    DELETE FROM
    products
    WHERE
    id = ${product.id}
    `;
  }
}
