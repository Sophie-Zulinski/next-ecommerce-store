'use client';
import { useState } from 'react';

export default function CookieBanner() {
  const localStorageValue = JSON.parse(
    window.localStorage.getItem('areCookiestermsaccepted'),
  );
  const initialState = localStorageValue === null ? false : localStorageValue;
  const [cookieBannerisVisible, setCookieBannerisVisible] =
    useState(initialState);
  return (
    !cookieBannerisVisible && (
      <>
        <div>This is a Cookie Banner</div>
        <button
          onClick={() => {
            setCookieBannerisVisible(true);
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
