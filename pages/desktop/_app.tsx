import React from 'react';
import { GlobalStyle } from 'src/components/common/global.styled';

function AppConfig({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default AppConfig;
