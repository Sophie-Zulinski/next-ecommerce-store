import Image from 'next/image';
import Link from 'next/link';
import { products } from '../database/products';
import styles from './page.module.scss';

export default function Products() {
  return (
    <>
      <h1>Sophie's plant store</h1>

      <main className={styles.main}>
        <Image src={`/images/gumtree-1.jpg`} width="300" height="458" />
      </main>
    </>
  );
}
