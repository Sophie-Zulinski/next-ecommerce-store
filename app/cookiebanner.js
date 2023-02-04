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
        <div>This is a Cookie Banner</div>
        <button
          onClick={() => {
            setCookieBannerAccepted(true);
            setLocalStorage('areCookieTermsAccepted', true);
          }}
        >
          Accept
        </button>
      </>
    )
  );
}
