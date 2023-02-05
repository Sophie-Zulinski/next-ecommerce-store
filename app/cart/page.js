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

  return (
    <div>
      <h1>Cart</h1>
      {fruitsWithStars.map((product) => {
        return (
          <div key={product.id}>
            <p>product: {product.name} </p>
            <p> amount: {product.amount} </p>
            {console.log('productamount', product.amount)}
          </div>
        );
      })}
    </div>
  );
}
