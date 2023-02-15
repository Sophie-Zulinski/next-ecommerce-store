import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export default async function Products() {
  const products = await getProducts();
  return (
    <>
      <h1>Flavors</h1>
      <main className={styles.main}>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link
                attribute_name="data-test-id=`product-<product id>`"
                href={`/products/${product.id}`}
              >
                <h2>{product.name}</h2>
              </Link>
              <Link href={`/products/${product.id}`}>
                <Image
                  src={`/images/${product.name}-${product.id}.jpg`}
                  alt={product.name}
                  width="300"
                  height="300"
                />
              </Link>
            </div>
          );
        })}
      </main>
    </>
  );
}
