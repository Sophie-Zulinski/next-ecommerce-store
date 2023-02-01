import './global.scss';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
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
