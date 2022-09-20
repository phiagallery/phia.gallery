// https://www.garymeehan.ie/blog/seo-in-nextjs-with-next-seo

/* env */
import ENV from "@core/config/env";

/* env vars */
const {
  BASE_URL,
  NAME,
  TITLE,
  SLOGAN,
  DESCRIPTION,
  AUTHOR,
  STATIC_DIR,
  IMAGE,
  IMAGE_SHARE,
  FACEBOOK_URL,
  TWITTER_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PHONE,
  ADDRESS,
  COUNTRY,
  REGION,
  POSTAL_CODE,
  LOCALE,
} = ENV;

export const DEFAULT_SEO = {
  title: "Phia Gallery",
  titleTemplate: "%s | Phia Gallery",
  description:
    "Phia Gallery - Consultant, Copywriter, actor and creative in Vancouver, Canada.",
  canonical: BASE_URL,
  // favicon: "/favicon/favicon.ico",
  additionalMetaTags: [
    { property: "author", content: "GEM Cloud" },
    { property: "keywords", content: "" },
  ],
  twitter: {
    cardType: "summary_large_image",
    handle: "@PhiaGallery",
    site: "@PhiaGallery",
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    site_url: BASE_URL,
    description:
      "Phia Gallery - Consultant, Copywriter, actor and creative in Vancouver, Canada.",
    site_name: "Phia Gallery",
    profile: {
      firstName: "Phia",
    },
    images: [
      {
        url: "/images/og.jpg",
        width: 1280,
        height: 720,
      },
      {
        url: "https://PhiaGallery/phia.jpg",
        width: 800,
        height: 512,
        alt: "Phia Gallery",
      },
      {
        url: "https://PhiaGallery/logo.png",
        alt: "PG Logo",
      },
    ],
  },
};
