import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <h1>Sophie's ice cream store</h1>

      <main className={styles.main}>
        <Image src="/images/pic07.jpg" alt="gumtree" width="300" height="458" />
      </main>
    </>
  );
}
