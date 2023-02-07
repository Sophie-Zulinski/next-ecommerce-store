import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import RemoveCookie from './removebutton';

export default async function Cart() {
  const products = await getProducts();
  // get the cookie from the server
  const productsCookie = cookies().get('Cart');

  // create a default value if cooke doesn't exist
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
    const productWithSubtotal = {
      ...productWithAmount,
      subtotal: productWithAmount.price * productWithAmount.amount,
    };

    return productWithSubtotal;
  });

  console.log('productsWithSubtotal', productsWithSubtotal);

  //  const totalPricePerPlant = function calculateprice(price, amount) {
  //  return price * amount;};
  // console.log(totalPricePerPlant);

  const totalAmount = productsWithAmount.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.amount;
  }, 0);
  console.log('totalAmount', totalAmount);

  const totaltotal = productsWithSubtotal.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.subtotal;
  }, 0);
  console.log('totaltotal', totaltotal);

  return (
    <div>
      <h1>Cart</h1>
      {productsWithSubtotal.map((product) => {
        return (
          <div key={product.id}>
            <span> {product.name}, </span>
            <span> price per scoop: {product.price},- € </span>
            <div> amount: {product.amount} </div>

            <div>Subtotal {product.subtotal},- €</div>
            <RemoveCookie product={product.amount} />

            <br />
          </div>
        );
      })}
      <div>Total amount: {totalAmount} </div> {console.log(typeof totalAmount)}
      <h1>TOTAL PRICE: {totaltotal},- €</h1>
    </div>
  );
}
