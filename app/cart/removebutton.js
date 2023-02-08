'use client';
import { useEffect, useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export default function RemoveCookie(props) {
  return (
    <button
      htmlFor="data-test-id=`product-add-to-cart`"
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
        }
      }}
    >
      Remove from cart
    </button>
  );
}
