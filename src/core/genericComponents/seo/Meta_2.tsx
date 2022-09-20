import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { DEFAULT_SEO } from "@core/config/next-seo.config";

type Props = {
  pageTitle?: string;
};

const meta = {
  description: `${DEFAULT_SEO.openGraph.site_name} provides awesome skills.`,
  ogImagePath: "/assets/card-image.webp",
};

const Meta: React.FC<Props> = ({ pageTitle }: Props) => {
  const router = useRouter();
  const ogUrl = DEFAULT_SEO.openGraph.site_url + router.asPath;
  const ogType = router.pathname === "/" ? "website" : "article";
  const ogTitle = pageTitle ? pageTitle : "Home";
  const ogImage = DEFAULT_SEO.openGraph.site_url + meta.ogImagePath;

  return (
    <Head>
      <title>{`${pageTitle} | ${DEFAULT_SEO.title}`}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#00a300" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#fff" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={meta.description} key="description" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={DEFAULT_SEO.openGraph.site_url} />
      <meta property="og:title" content={ogTitle} />
      <meta
        property="og:description"
        content={meta.description}
        key="ogDescription"
      />
      <meta property="og:image" content={ogImage} key="ogImage" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DEFAULT_SEO.twitter.site} />
    </Head>
  );
};

export default Meta;
