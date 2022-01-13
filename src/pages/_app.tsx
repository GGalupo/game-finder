import type { AppProps } from "next/app";

import { Footer } from "../components/Footer";

import { GlobalStyles } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
