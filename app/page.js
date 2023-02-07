import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Scoop!</h1>

      <Image
        src="/images/homepage.jpg"
        alt="icecream"
        width="900"
        height="600"
      />
    </main>
  );
}
