import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import TotalAmount from './cart/totalamount';
import CookieBanner from './cookiebanner';
import styles from './layout.module.scss';

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <CookieBanner />

          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link attribute="data-test-id=`products-link`" href="/products">
                Choose Flavours
              </Link>
            </div>
            {/* <div>{lengthCookieParsed}</div>*/}
            <div className={styles.cart}>
              <span
                htmlFor="data-test-id=`cart-count`"
                className={styles.amount}
              >
                <TotalAmount />
              </span>
              <Link htmlFor="data-test-id=`cart-link`" href="/cart">
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
