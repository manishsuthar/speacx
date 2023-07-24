import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {Login} from '@/components/Login';

export default function App({ Component, pageProps }: AppProps) {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      {isAuth ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Login setIsAuth={setIsAuth} />
      )}
    </>
  );
}
