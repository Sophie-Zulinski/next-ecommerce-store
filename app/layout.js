import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import TotalAmount from './cart/totalamount';
import CookieBanner from './cookiebanner';
import styles from './layout.module.scss';

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  /* LENGTH COOKIE START (NOT USED!!!!)
  const length = cookies().get('Length');
  console.log('length', length);
  let lengthCookieParsed = [];

  if (length) {
    lengthCookieParsed = JSON.parse(length.value);
  }
  console.log('lengthCookieParsed', lengthCookieParsed);
  // LENGTH COOKIE END */
  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <CookieBanner />

          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link href="/products">Choose Flavours</Link>
            </div>
            {/* <div>{lengthCookieParsed}</div>*/}
            <div className={styles.cart}>
              <span className={styles.amount}>
                <TotalAmount />
              </span>
              <Link href="/cart">
                {' '}
                <Image
                  src="/images/cart.png"
                  alt="cart"
                  width="35"
                  height="30"
                />
              </Link>
              <Link href="/checkout">Checkout</Link>
            </div>
          </nav>
        </header>

        {children}
        <footer className={styles.footer}>
          © copyright Sophie Zulinski 2023
        </footer>
      </body>
    </html>
  );
}
