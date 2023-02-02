'use client';

import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

// fruitsCookie = [ {id: number, stars: number  },  ]

export default function ProductsCookie(props) {
  return (
    <div>
      <h2>{props.fruit.name}</h2>

      <button
        onClick={() => {
          // get the cookie
          const fruitsInCookies = getParsedCookie('fruitsCookie');
          console.log('cart -', fruitsInCookies);
          if (!fruitsInCookies) {
            // if there is no cookie function stop here
            return;
          }

          // try to find the fruit inside of the cookies
          const foundFruit = fruitsInCookies.find((fruitInCookie) => {
            return fruitInCookie.id === props.fruit.id;
          });

          // my fruit is not inside of the cookie
          if (foundFruit) {
            // update the cookie with the new values
            foundFruit.amount--;
            // if there is a negative value set number to 0
            if (foundFruit.amount < 0) {
              foundFruit.amount = 0;
            }
            // Update the cookie after transformation
            setStringifiedCookie('fruitsCookie', fruitsInCookies);
          }
        }}
      >
        - 1
      </button>
      <button
        onClick={() => {
          // get the cookie
          const fruitsInCookies = getParsedCookie('fruitsCookie');
          console.log('cart', fruitsInCookies);
          // if there is no cookie we initialize the value with a 1
          if (!fruitsInCookies) {
            // create the cookie with a new object for the fruit
            setStringifiedCookie('fruitsCookie', [
              { id: props.fruit.id, amount: 0 },
            ]);
            // if there is no cookie function stop here
            return;
          }

          const foundFruit = fruitsInCookies.find((fruitInCookie) => {
            return fruitInCookie.id === props.fruit.id;
          });

          // my fruit is inside of the cookie
          if (foundFruit) {
            // Add a start to the foundFruit
            foundFruit.amount++;
            // my fruit is not inside of the cookie
          } else {
            // Add a the fruit to the array of fruits in cookies
            fruitsInCookies.push({ id: props.fruit.id, amount: 0 });
          }

          // Update the cookie after transformation
          setStringifiedCookie('fruitsCookie', fruitsInCookies);
        }}
      >
        + 1
      </button>
    </div>
  );
}
