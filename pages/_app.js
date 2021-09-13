import { css, Global } from '@emotion/react';
import { darkGray, lightGray } from '../styles/styles';

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
          h1,
          h2,
          h3,
          h4 {
            font-family: 'Spartan', sans-serif;
            color: ${darkGray};
            padding: 0 25px;
          }

          p {
            font-family: 'Spartan', sans-serif;
            color: ${lightGray};
            padding: 0 25px;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
