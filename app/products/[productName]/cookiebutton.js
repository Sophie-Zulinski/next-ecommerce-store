'use client';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export default function ProductsCookie(props) {
  const [amountInsert, setAmountInsert] = useState('');
  // fruitsCookie = [ {id: number, stars: number  },  ]

  function handlefirstChange(x) {
    setAmountInsert(x.target.value);
  }
  return (
    <div>
      {' '}
      <input
        htmlFor="data-test-id=`product-quantity`"
        value={amountInsert}
        type="number"
        onChange={handlefirstChange}
        id={amountInsert}
        placeholder="Insert Quantity"
        required
      />
      <button
        htmlFor="data-test-id=`product-add-to-cart`"
        onClick={() => {
          // get the cookie
          const productsInCookies = getParsedCookie('Cart');
          console.log('cart', productsInCookies);
          // if there is no cookie we initialize the value with a 1
          if (!productsInCookies) {
            // create the cookie with a new object for the fruit
            // add the inserted amount when there is none yet
            setStringifiedCookie('Cart', [
              { id: props.product.id, amount: parseInt(amountInsert, 10) },
            ]);
            // if there is no cookie function stop here
            return;
          }

          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.product.id;
          });

          // my fruit is inside of the cookie
          if (foundProduct) {
            // Add a start to the foundFruit
            foundProduct.amount++;
            // my fruit is not inside of the cookie
          } else {
            // Add a the fruit to the array of fruits in cookies, add amountInsert
            productsInCookies.push({
              id: props.product.id,
              amount: parseInt(amountInsert, 10),
            });
          }
          console.log('amountInsert', amountInsert);
          // Update the cookie after transformation
          setStringifiedCookie('Cart', productsInCookies);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
