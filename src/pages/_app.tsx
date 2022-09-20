import React from "react";
import "@styles/globals.css";
import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO } from "@core/config/next-seo.config";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Navigation from "@core/genericComponents/Navigation";
import Footer from "@core/genericComponents/Footer";

export default function MyApp({ Component, pageProps }: any) {
  const { pathname } = useRouter();
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      {/* <Head> favicon should be _document.tsx file!
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head> */}
      <Navigation />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} key={pathname} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
