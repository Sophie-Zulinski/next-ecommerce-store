'use client';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export default function Test(props) {
  return (
    <button
      htmlFor="data-test-id=`product-add-to-cart`"
      onClick={() => {
        // Update the cookie after transformation
        setStringifiedCookie('New', 10);
      }}
    >
      Testcookie
    </button>
  );
}
