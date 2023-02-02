'use client';

import { getParsedCookie, setStringifiedCookie } from '../utils/cookies';

// fruitsCookie = [ {id: number, stars: number  },  ]

export default function Fruit(props) {
  return (
    <div>
      <h2>{props.fruit.name}</h2>
      <p>{props.fruit.icon}</p>
      <button
        onClick={() => {
          // get the cookie
          const fruitsInCookies = getParsedCookie('fruitsCookie');

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
            foundFruit.stars--;
            // if there is a negative value set number to 0
            if (foundFruit.stars < 0) {
              foundFruit.stars = 0;
            }
            // Update the cookie after transformation
            setStringifiedCookie('fruitsCookie', fruitsInCookies);
          }
        }}
      >
        - ⭐️
      </button>
    </div>
  );
}
