import React from "react";
import { NextSeo } from "next-seo";
import { getHomePage, getCompletePortfolio } from "@core/libs/api";
import markdownToHtml from "@core/libs/markdownToHtml";
import Container from "@core/genericComponents/Container";
import Layout from "@core/genericComponents/Layout";
import Hero from "@components/HomePage/Hero";
import About from "@components/HomePage/About";
import Portfolio from "@components/HomePage/Portfolio";

export default function Index({ home, articles }: any) {
  const {
    title,
    tagline,
    heroBackgroundImage,
    content,
    aboutImageDesktop,
    aboutImageMobile,
  } = home;

  const pageTitle = "Home";

  {
    /*  Overriding NextSeo meta data */
  }
  // const SEOCurrentPage = {
  //   title: pageTitle,
  //   description: "Phia Gallery Home Page",
  //   // openGraph : [{
  //   //   title: pageTitle,
  //   // }],
  //   // description: metaDescription,
  //   // canonical: `${BASE_URL}${pathname}`,
  //   // openGraph: [
  //   //   {
  //   //     url: BASE_URL,
  //   //     images: { url: `${BASE_URL}${STATIC_DIR}logo-share.jpg` },
  //   //     site_name: AUTHOR,
  //   //   },
  //   // ],
  //   ...SeoData,
  // };

  return (
    <>
      {/*  Overriding NextSeo */}
      <NextSeo
        title="Home"
        description="Phia Gallary Home Page"
        //canonical="https://base_url/"
        openGraph={{
          url: "https://base_url/",
          title: "Home",
        }}
      />
      <Layout>
        <Hero
          title={title}
          tagline={tagline}
          backgroundImage={heroBackgroundImage}
        />
        <Container>
          <About
            content={content}
            desktopImage={aboutImageDesktop}
            mobileImage={aboutImageMobile}
          />
          <Portfolio articles={articles} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const home = getHomePage();
  const content = await markdownToHtml(home.content || "");

  const articles = getCompletePortfolio([
    "title",
    "date",
    "description",
    "slug",
    "image",
    "excerpt",
  ]);

  return {
    props: {
      home: {
        ...home,
        content,
      },
      articles,
    },
  };
}
