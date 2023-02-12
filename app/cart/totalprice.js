import { cookies } from 'next/headers';
import { getProducts } from '../../database/products';

export default async function TotalPrice() {
  // get products from database
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
  console.log('productsWithSubtotal.totalprice.js', productsWithSubtotal);
  //  const totalPricePerPlant = function calculateprice(price, amount) {
  //  return price * amount;};
  // console.log(totalPricePerPlant);

  // Calculate total price
  const totaltotal = productsWithSubtotal.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.subtotal;
  }, 0);
  console.log('totalprice.totalprice.js', totaltotal);
  return <div>Total price: {totaltotal} ,- €</div>;
}
