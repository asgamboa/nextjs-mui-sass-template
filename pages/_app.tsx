import "@/styles/globals.scss";

import { StyledEngineProvider } from "@mui/styled-engine";
import Head from "next/head";

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default MyApp;
