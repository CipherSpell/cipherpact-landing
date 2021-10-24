import { FC } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import configs from "../utils/configs";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{configs.title}</title>
        <meta name="description" content={configs.description} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
