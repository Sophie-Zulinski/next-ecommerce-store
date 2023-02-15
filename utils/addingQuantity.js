import { getParsedCookie } from '../utils/cookies';

export function addQuantity(props) {
  const amountInsert = Number;
  const productsInCookies = getParsedCookie('Cart');
  console.log('cart', productsInCookies);
  // if there is no cookie we initialize the value with a 1

  const foundProduct = productsInCookies.find((productInCookie) => {
    return productInCookie.id === props.product.id;
  });

  // my fruit is inside of the cookie
  if (foundProduct) {
    // Add a start to the foundFruit
    foundProduct.amount = foundProduct.amount + parseInt(amountInsert, 10);
  }
}
