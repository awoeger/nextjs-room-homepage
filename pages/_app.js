import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          *,
          *::after,
          *::before {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
