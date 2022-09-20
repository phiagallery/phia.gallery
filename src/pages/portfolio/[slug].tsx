import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { NextSeo } from "next-seo";
import { getPortfolioBySlug, getCompletePortfolio } from "@core/libs/api";
import Container from "@core/genericComponents/Container";
import Layout from "@core/genericComponents/Layout";
import markdownToHtml from "@core/libs/markdownToHtml";
import Article from "@components/PortfolioSlugPage/Article";

import ENV from "@core/config/env";
/* env vars */
  const { BASE_URL, NAME} = ENV;

export default function Post({ post }: any) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { title, image, date, content, description, slug, tags } = post;
  const canonical = `${BASE_URL}${slug}`;
  // const {
  //   src,
  //   srcSet,
  // } = require(`../../images/portfolio/${image}?resize&sizes[]=250&sizes[]=500&sizes[]=800`);
  const imgsrc = `/images/portfolio/${image}`;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title,
          description,
          images: [
            {
              url: `${BASE_URL}${image}`,
              alt: title,
            },
            {
              url: `${BASE_URL}Phia.jpg`,
              width: 800,
              height: 512,
              alt: `${NAME}`,
            },
            {
              url: `${BASE_URL}logo.png`,
              alt: "PG Logo",
            },
          ],
          article: {
            publishedTime: date,
            tags,
          },
        }}
      />
      <Layout>
        <Container>
          {router.isFallback ? (
            <p>Loading...</p>
          ) : (
            <Article
              title={title}
              imgSrc={imgsrc}
              // imgSrcSet={srcSet}
              date={date}
              content={content}
            />
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }: any) {
  const post = getPortfolioBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "image",
    "description",
    "tags",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getCompletePortfolio(["slug"]);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
