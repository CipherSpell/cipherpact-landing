import { FC } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import configs from "../utils/configs";

//Styles

import { GlobalStyles } from "../styles/globals";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{configs.title}</title>
        <meta name="description" content={configs.description} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
