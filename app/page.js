import Image from 'next/image';
import pic07 from '../public/images/pic07.jpg';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <>
      <h1>Sophie's product page HOME </h1>
      <main>
        <h2>We sell plants</h2>
        {/*
        This is a way of avoiding having to find
        the width and height and writing them
        manually in your JSX
      */}
        <Image className={styles.image} src={pic07} alt="pic07" />
      </main>
    </>
  );
}
