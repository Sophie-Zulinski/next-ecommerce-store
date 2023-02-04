import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import styles from './page.module.scss';

export default function Products() {
  return (
    <>
      <h1>All Plants Page</h1>
      <main className={styles.main}>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link
                attribute_name="data-test-id=`product-<product id>`"
                href={`/fruits/${product.name.toLocaleLowerCase()}`}
              >
                <h2>{product.name}</h2>
              </Link>
              <Link href={`/fruits/${product.name.toLocaleLowerCase()}`}>
                <Image
                  src={`/images/${product.name}-${product.id}.jpg`}
                  alt={product.name}
                  width="300"
                  height="458"
                />
              </Link>
            </div>
          );
        })}
      </main>
      {console.log(products)}
    </>
  );
}
