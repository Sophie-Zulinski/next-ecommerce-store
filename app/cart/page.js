import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';
import RemoveCookie from './removebutton';

export default async function Cart() {
  const products = await getProducts();
  // get the cookie from the server
  const productsCookie = cookies().get('Cart');

  // create a default value if cookie doesn't exist
  let fruitsCookieParsed = [];

  if (productsCookie) {
    fruitsCookieParsed = JSON.parse(productsCookie.value);
  }

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
  console.log('totaltotal', totaltotal);

  // function to show ice creams subtotal only if there is this product in the cart
  function showAmountSubtotal(x) {
    if (x === 0) {
      return null;
    }
    return '(Subtotal: ' + x + ',- €)';
  }

  // function to show ice creams amount only if there is this product in the cart
  function showAmount(x) {
    if (x === 0) {
      return null;
    }
    return x + ' scoops of ';
  }

  return (
    <div>
      <main className={styles.main}>
        <h1>Cart</h1>
        {productsWithSubtotal.map((product) => {
          return (
            <div key={product.id}>
              <span> {showAmount(product.amount)}</span>
              <span>{product.name}, </span>
              <span>
                {/* Ternary operator to hide name if not in cart ({product.amount}?===0):(return null): return {product.name};*/}
              </span>
              <span> price per scoop: {product.price},- € </span>

              <span> {showAmountSubtotal(product.subtotal)}</span>
            </div>
          );
        })}
        <h1>Total amount of scoops: {totalAmount} </h1>{' '}
        {console.log(typeof totalAmount)}
        <h1>TOTAL PRICE: {totaltotal},- €</h1>
        <RemoveCookie product={productsWithAmount} />
      </main>
    </div>
  );
}
