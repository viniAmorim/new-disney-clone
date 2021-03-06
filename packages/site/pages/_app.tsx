import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import { Alert } from '@site/uikit';
import Amplify from 'aws-amplify';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '~/themes/theme.json';

import amplifyConfig from '../amplifyConfig';

Amplify.configure(amplifyConfig);

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #__next {
    height: 100%;
  }

  .background {
    background: #1e2841;
    background-size: contain;
    width: 100%;
    height: 100%;
    background-attachment: fixed;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider components={{ Toast: Alert }}>
        <Head>
          <title>Disney +</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ToastProvider>
    </ThemeProvider>
  );
}
export default MyApp;
