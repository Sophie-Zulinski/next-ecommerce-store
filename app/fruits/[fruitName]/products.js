'use client';

import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

// fruitsCookie = [ {id: number, stars: number  },  ]

export default function Fruit(props) {
  return (
    <div>
      <button
        onClick={() => {
          // get the cookie
          const fruitsInCookies = getParsedCookie('fruitsCookie');
          console.log('fruitsname fruitsInCookies', fruitsInCookies);
          // if there is no cookie we initialize the value with a 1
          if (!fruitsInCookies) {
            // create the cookie with a new object for the fruit
            setStringifiedCookie('fruitsCookie', [
              { id: props.fruit.id, amount: 1 },
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
            fruitsInCookies.push({ id: props.fruit.id, amount: 1 });
          }

          // Update the cookie after transformation
          setStringifiedCookie('fruitsCookie', fruitsInCookies);
        }}
      >
        add to cart
      </button>
    </div>
  );
}
