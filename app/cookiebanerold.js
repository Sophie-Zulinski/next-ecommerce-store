'use client';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [cookieBannerAccepted, setCookieBannerAccepted] = useState(false);
  useEffect(() => {
    const localStorageValue = JSON.parse(
      window.localStorage.getItem('areCookiestermsaccepted'),
    );
    const initialState =
      localStorageValue === undefined ? false : localStorageValue;
    setCookieBannerAccepted(initialState);
  }, []);

  return (
    !cookieBannerAccepted && (
      <>
        <div>This is a Cookie Banner</div>
        <button
          onClick={() => {
            setCookieBannerAccepted(true);
            window.localStorage.setItem(
              'areCookiestermsaccepted',

              JSON.stringify(true),
            );
          }}
        >
          Accept
        </button>
      </>
    )
  );
}
