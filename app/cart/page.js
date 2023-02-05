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

  const fruitsWithStars = products.map((product) => {
    const fruitWithStars = { ...product, amount: 0 };

    // i read the cookie and find the fruit
    const productInCookie = fruitsCookieParsed.find(
      (fruitObject) => product.id === fruitObject.id,
    );

    // if find the fruit i update the amount of stars
    if (productInCookie) {
      fruitWithStars.amount = productInCookie.amount;
    }

    return fruitWithStars;
  });
  console.log('fuitswithStars', fruitsWithStars);

  const totalPricePerPlant = function calculateprice(price, amount) {
    return price * amount;
  };

  return (
    <div>
      <h1>Cart</h1>
      {fruitsWithStars.map((product) => {
        return (
          <div key={product.id}>
            <span> {product.name} </span>
            <span> price per plant: {product.price},- € </span>
            <div> amount: {product.amount} </div>

            <h1>
              Subtotal {product.name}:
              {totalPricePerPlant(product.price, product.amount)},- €
            </h1>
          </div>
        );
      })}
    </div>
  );
}
