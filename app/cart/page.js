import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

export default function Cart() {
  // get the cookie from the server
  const productsCookie = cookies().get('productsCookie');

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

  const productsWithSubtotal = productsWithAmount.map((productWithAmount) => {
    const productsWithSubtotal = {
      ...productWithAmount,
      subtotal: productWithAmount.price * productWithAmount.amount,
    };

    return productsWithSubtotal;
  });

  console.log('productsWithSubtotal', productsWithSubtotal);

  const totalPricePerPlant = function calculateprice(price, amount) {
    return price * amount;
  };
  console.log(totalPricePerPlant);

  const totalAmount = productsWithAmount.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.amount;
  }, 0);
  console.log('totalAmunt', totalAmount);

  const totaltotal = productsWithSubtotal.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.subtotal;
  }, 0);
  console.log('totatl', totaltotal);

  return (
    <div>
      <h1>Cart</h1>
      {productsWithAmount.map((product) => {
        return (
          <div key={product.id}>
            <span> {product.name} </span>
            <span> price per plant: {product.price},- € </span>
            <div> amount: {product.amount} </div>

            <div>
              Subtotal {product.name}:{' '}
              {totalPricePerPlant(product.price, product.amount)},- €
            </div>
            <br />
          </div>
        );
      })}
      <div>Total amount: {totalAmount} Plants</div>{' '}
      {console.log(typeof totalAmount)}
      <h1>TOTAL PRICE: {totaltotal},- €</h1>
    </div>
  );
}
