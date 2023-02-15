'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export default function ProductsCookie(props) {
  const [amountInsert, setAmountInsert] = useState(1);
  const router = useRouter();
  // fruitsCookie = [ {id: number, stars: number  },  ]

  function handlefirstChange(x) {
    setAmountInsert(x.target.value);
  }
  return (
    <div>
      <form method="post">
        {' '}
        <input
          htmlFor="data-test-id=`product-quantity`"
          value={amountInsert}
          type="number"
          min="1"
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
              router.refresh();
              // if there is no cookie function stop here
              return;
            }

            const foundProduct = productsInCookies.find((productInCookie) => {
              return productInCookie.id === props.product.id;
            });

            // my fruit is inside of the cookie
            if (foundProduct) {
              // Add a start to the foundFruit
              foundProduct.amount =
                foundProduct.amount + parseInt(amountInsert, 10);
              router.refresh();

              console.log('foundProduct', foundProduct);
              // my fruit is not inside of the cookie
            } else {
              // Add a the fruit to the array of fruits in cookies, add amountInsert
              productsInCookies.push({
                id: props.product.id,
                amount: parseInt(amountInsert, 10),
              });
              router.refresh();
            }
            console.log('amountInsert', amountInsert);
            // Update the cookie after transformation
            setStringifiedCookie('Cart', productsInCookies);
            router.refresh();
          }}
        >
          Add to cart
        </button>
      </form>
    </div>
  );
}
