import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import TotalAmount from './cart/totalamount';
import CookieBanner from './cookiebanner';
import styles from './layout.module.scss';

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.html}>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/papercss@1.9.1/dist/paper.min.css"
        />
      </head>

      <body className="paper container">
        <header className={styles.header}>
          <CookieBanner />

          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link data-test-id="products-link" href="/products">
                Choose Flavours
              </Link>
            </div>
            {/* <div>{lengthCookieParsed}</div>*/}
            <div className={styles.cart}>
              <Link data-test-id="cart-link" href="/cart">
                {' '}
                <Image
                  src="/images/cart.png"
                  alt="cart"
                  width="35"
                  height="30"
                />
              </Link>
              <span data-test-id="cart-count" className={styles.amount}>
                <TotalAmount />
              </span>
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
