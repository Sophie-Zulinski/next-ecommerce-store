'use client';
import { useRouter } from 'next/navigation';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export default function RemoveCookie(props) {
  const router = useRouter();
  return (
    <button
      data-test-id="cart-product-remove-<product id>"
      onClick={() => {
        // get the cookie
        const productsInCookies = getParsedCookie('Cart');
        console.log('cart', productsInCookies);

        const foundProduct = productsInCookies.find((productInCookie) => {
          return productInCookie.id === props.product.id;
        });

        // my fruit is inside of the cookie
        if (foundProduct) {
          // Add a start to the foundFruit
          foundProduct.amount--;
          // if there is a negative value set number to 0
          if (foundProduct.amount < 0) {
            foundProduct.amount = 0;
          }
          // Update the cookie after transformation
          setStringifiedCookie('Cart', productsInCookies);
          router.refresh();
        }
      }}
    >
      Remove from cart
    </button>
  );
}
