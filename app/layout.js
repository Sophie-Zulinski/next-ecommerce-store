import './global.scss';
import { cookies } from 'next/headers';
import Link from 'next/link';
import TotalAmount from './cart/totalamount';
import CookieBanner from './cookiebanner';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  // LENGTH COOKIE START
  const length = cookies().get('Length');
  console.log('length', length);
  let lengthCookieParsed = [];

  if (length) {
    lengthCookieParsed = JSON.parse(length.value);
  }
  console.log('lengthCookieParsed', lengthCookieParsed);
  // LENGTH COOKIE END
  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <CookieBanner />

          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
            </div>
            {/*<div>{lengthCookieParsed}</div>*/}
            <div>
              <TotalAmount />
              <Link href="/cart">Cart</Link>
              <Link href="/checkout">Checkout</Link>
            </div>
          </nav>
        </header>

        {children}
        <footer className={styles.footer}>
          copyright Sophie Zulinski 2023
        </footer>
      </body>
    </html>
  );
}
