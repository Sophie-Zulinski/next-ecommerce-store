import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <h1>Sophie's plant store</h1>

      <main className={styles.main}>
        <Image
          src="/images/gumtree-1.jpg"
          alt="gumtree"
          width="300"
          height="458"
        />
      </main>
    </>
  );
}
