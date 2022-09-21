import React from "react";
import { NextSeo } from "next-seo";
import Layout from "@core/genericComponents/Layout";
import { getCompletePortfolio } from "@core/libs/api";
import Portfolio from "@components/PortfolioPage/Portfolio";

export default function Index({ articles }: any) {
  return (
    <Layout>
      {/* <NextSeo {...SeoData} /> */}
      <NextSeo
        title="Portfolio"
        description="."
        canonical="https://base_url/portfolio"
        openGraph={{
          url: "https://base_url/portfolio",
          title: "Portfolio",
          description:
            "Phia's Portfolio documenting works that she has crafted while working as either a consult, actor or creative.",
        }}
      />
      <div className="pt-12 md:pt-24 text-center mb-4 md:mb-10">
        <h1 className="font-title text-7xl text-pink-custom mb-4">Portfolio</h1>
        <p className="font-body text-base mx-4 md:mx-16 lg:mx-32">
          Here are some of my writing projects! They vary from personal blogs to
          commissioned articles – and everything in between. If you have any
          questions or would like to chat about a piece, please feel free to
          contact me.
        </p>
      </div>
      <Portfolio articles={articles} />
    </Layout>
  );
}

export async function getStaticProps() {
  const articles = getCompletePortfolio([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "audio",
    "excerpt",
    "description",
  ]);

  return {
    props: { articles },
  };
}
