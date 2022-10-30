/* eslint-disable @next/next/inline-script-id */
import '../styles/globals.css';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { StoreProvider } from '../utils/Store';
import { SnackbarProvider } from 'notistack';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
 <>
    <Script
    strategy='lazyOnLoad'
    src={`https://www.googletagmanager.com/gtag/js?id= ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />
      <Script 
      strategy='lazyOnload'>
         {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} );
                `}
      </Script>
      
    <CacheProvider value={emotionCache}>
      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <StoreProvider>
          <PayPalScriptProvider deferLoading={true}>
            <Component {...pageProps} />
            <Analytics />
          </PayPalScriptProvider>
        </StoreProvider>
      </SnackbarProvider>
    </CacheProvider>
 </>
  );
}

export default MyApp;
