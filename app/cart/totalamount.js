import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

export default async function TotalAmount() {
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
  return <span>{totalAmount}</span>;
}
// Calculate total amount
