import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
  description: 'Products page',
};

export default async function Products() {
  const products = await getProducts();
  return (
    <>
      <h2>Flavours</h2>
      <main className={styles.main}>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link
                data-test-id="product-<product id>"
                href={`/products/${product.id}`}
              >
                <h4>{product.name}</h4>
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
