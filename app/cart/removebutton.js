'use client';

import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

// fruitsCookie = [ {id: number, stars: number  },  ]

export default function RemoveCookie(props) {
  return (
    <div>
      <button
        onClick={() => {
          // get the cookie
          const productsInCookies = getParsedCookie('Cart');
          console.log('cart', productsInCookies);
          // if there is no cookie we initialize the value with a 1

          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.product.id;
          });

          // my fruit is inside of the cookie
          if (foundProduct) {
            // Add a start to the foundFruit
            foundProduct.amount--;
            // my fruit is not inside of the cookie
          }

          // Update the cookie after transformation
          setStringifiedCookie('Cart', productsInCookies);
        }}
      >
        Remove from cart
      </button>
    </div>
  );
}
