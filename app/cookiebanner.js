'use client';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function CookieBanner() {
  const [cookieBannerAccepted, setCookieBannerAccepted] = useState(false);
  useEffect(() => {
    const localStorageValue = getLocalStorage('areCookieTermsAccepted');
    const initialState =
      localStorageValue === undefined ? false : localStorageValue;
    setCookieBannerAccepted(initialState);
  }, []);

  return (
    !cookieBannerAccepted && (
      <>
        <div>Do you want free cookies to your ice cream?</div>
        <button
          onClick={() => {
            setCookieBannerAccepted(true);
            setLocalStorage('areCookieTermsAccepted', true);
          }}
        >
          Yes please!
        </button>
      </>
    )
  );
}
