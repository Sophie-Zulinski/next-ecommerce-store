import { cookies } from 'next/headers';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';
import RemoveCookie from './removebutton';
import TotalAmount from './totalamount';
import TotalPrice from './totalprice';

export default async function Cart() {
  // get products from database
  const products = await getProducts();
  // get products from database

  const productsCookie = cookies().get('Cart');
  console.log('productsCookie', productsCookie);

  // create a default value if cookie doesn't exist
  let fruitsCookieParsed = [];

  if (productsCookie) {
    fruitsCookieParsed = JSON.parse(productsCookie.value);
  }
  console.log('fruitCookieParsedPage', fruitsCookieParsed);

  const productsWithAmount = products.map((product) => {
    const productWithAmount = { ...product, amount: 0 };

    // i read the cookie and find the fruit
    const productInCookie = fruitsCookieParsed.find(
      (fruitObject) => product.id === fruitObject.id,
    );

    // if find the fruit i update the amount of stars
    if (productInCookie) {
      productWithAmount.amount = productInCookie.amount;
    }

    return productWithAmount;
  });

  // add subtotal to array out products
  const productsWithSubtotal = productsWithAmount.map((productWithAmount) => {
    const productWithSubtotal = {
      ...productWithAmount,
      subtotal: productWithAmount.price * productWithAmount.amount,
    };

    return productWithSubtotal;
  });

  // function to show ice creams subtotal only if there is this product in the cart
  function showAmountSubtotal(x) {
    if (x === 0) {
      return null;
    }
    return '(Subtotal: ' + x + ',- €)';
  }

  // function to show ice creams amount only if there is this product in the cart
  function showAmount(x, y, z) {
    if (x === 0) {
      return null;
    }
    return x + ' scoops of ' + y + ' ' + z + ',- € per scoop';
  }

  function showButton(x, y) {
    if (x === 0) {
      return null;
    }
    return y;
  }

  return (
    <div>
      <main className={styles.main}>
        <h1>Cart</h1>

        <div data-test-id="cart-product-<product id>">
          {productsWithSubtotal.map((product) => {
            return (
              <div key={product.id}>
                <span data-test-id="cart-product-quantity-<product id>">
                  {' '}
                  {showAmount(product.amount, product.name, product.price)}
                </span>

                {/* Ternary operator to hide name if not in cart ({product.amount}?===0):(return null): return {product.name};*/}

                <span> {showAmountSubtotal(product.subtotal)}</span>
                {showButton(
                  product.amount,
                  <span data-test-id="cart-product-remove-<product id>">
                    {' '}
                    <RemoveCookie product={product} />
                  </span>,
                )}
              </div>
            );
          })}
        </div>

        <h3>
          Total amount of scoops: <TotalAmount />
        </h3>

        {console.log(typeof totalAmount)}
        <h3 data-test-id="cart-total">
          <TotalPrice />
        </h3>
        <form action="/checkout" method="post">
          <button className={styles.Link} data-test-id="cart-checkout">
            Checkout
          </button>
        </form>
      </main>
    </div>
  );
}
