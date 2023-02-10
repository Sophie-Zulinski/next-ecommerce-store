import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';
import styles from './page.module.scss';
import RemoveCookie from './removebutton';
import TotalAmount from './totalamount';

export default async function Cart() {
  // get products from database
  const products = await getProducts();
  // get the cookie from the server
  const productsCookie = cookies().get('Cart');
  console.log('productsCookie', productsCookie);

  // create a default value if cookie doesn't exist
  let fruitsCookieParsed = [];

  if (productsCookie) {
    fruitsCookieParsed = JSON.parse(productsCookie.value);
  }
  console.log('fruitCookieParsed', fruitsCookieParsed);

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
    const productsWithSubtotal = {
      ...productWithAmount,
      subtotal: productWithAmount.price * productWithAmount.amount,
    };

    return productsWithSubtotal;
  });

  console.log('productsWithSubtotal', productsWithSubtotal);

  //  const totalPricePerPlant = function calculateprice(price, amount) {
  //  return price * amount;};
  // console.log(totalPricePerPlant);

  // Calculate total amount
  const totalAmount = productsWithSubtotal.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.amount;
  }, 0);
  console.log('totalAmount', totalAmount);

  // Calculate total price
  const totaltotal = productsWithSubtotal.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.subtotal;
  }, 0);
  console.log('totaltotalcookie', totaltotal);
  setStringifiedCookie('totalAmount', totaltotal);

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
        <div htmlFor="data-test-id='cart-product-<product id>'">
          {productsWithSubtotal.map((product) => {
            return (
              <div key={product.id}>
                <span htmlFor="data-test-id='cart-product-quantity-<product id>'">
                  {' '}
                  {showAmount(product.amount, product.name, product.price)}
                </span>

                {/* Ternary operator to hide name if not in cart ({product.amount}?===0):(return null): return {product.name};*/}

                <span> {showAmountSubtotal(product.subtotal)}</span>
                {showButton(product.amount, <RemoveCookie product={product} />)}
              </div>
            );
          })}
        </div>
        <h1>Total amount of scoops: {totalAmount} </h1>
        {/* <RemoveCookie product={totalAmount} /> */}
        {console.log(typeof totalAmount)}
        <h1 htmlFor="data-test-id=`cart-total`">
          TOTAL PRICE: {totaltotal},- €
        </h1>
        <button htmlFor="data-test-id=`cart-checkout`">
          <Link href="/checkout">Checkout</Link>
        </button>
        <TotalAmount />
      </main>
    </div>
  );
}
