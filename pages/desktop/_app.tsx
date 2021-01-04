import React from 'react';
import { GlobalStyle } from 'src/modules/core/components/common/global.styled';
import { useFonts } from 'src/modules/core/hooks/use-fonts/use-fonts';
import Head from 'next/head';

function AppConfig({ Component, pageProps }) {
  useFonts();

  return (
    <>
      <Head>
        <title>localhost</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default AppConfig;
