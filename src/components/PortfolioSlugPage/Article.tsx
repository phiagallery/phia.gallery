import React from "react";
import Image from "next/image";
import DateFormatter from "@core/genericComponents/DateFormatter";
import PrintMarkdownHTML from "@core/genericComponents/PrintMarkdownHTML";
import Link from "@core/genericComponents/links/NoScrollLink";

const ConditionalWrapper = ({ children, condition }: any) => {
  if (condition !== undefined && condition.includes(".mp3")) return children;
  else return "";
};

export default function Article({
  title,
  imgSrc,
  // background_audio: string,
  background_audio,
  date,
  content,
}: any) {
  return (
    <article className="flex flex-col items-center justify-center text-center pt-6 md:pt-32">
      {/* <img src={imgSrc} srcSet={imgSrcSet} alt={title} className="md:h-50vh" /> */}
      {/* <img src={imgSrc} srcSet="" alt={title} className="md:h-50vh" /> */}
      {/* <div className="md:h-50vh object-cover mb-2 md:mb-2" > */}
      <Image
        alt={title}
        src={imgSrc}
        width={215}
        height={215}
        priority

        // layout="responsive"
        // layout="fill"
      />
      {/* audio How to check whether file exist or not?   .indexOf('nice') !== -1*/}
      <ConditionalWrapper condition={background_audio}>
        {/* <ConditionalWrapper condition={background_audio.indexOf(".mp3") !== -1}> */}
        <p className="font-title my-2 md:my-8 text-lg">
          <audio controls autoPlay loop>
            <source src={background_audio} type="audio/mpeg" />
          </audio>
        </p>
      </ConditionalWrapper>
      <h1 className="text-4xl md:text-6xl font-title text-pink-custom mt-4 md:mt-16 mb-4">
        {title}
      </h1>
      <p className="font-title my-2 md:my-8 text-lg">
        <DateFormatter dateString={date} />
      </p>
      <PrintMarkdownHTML content={content} />
      <Link href={{ pathname: "/portfolio", query: { internalLink: true } }}>
        <a className="px-4 py-2 my-8 md:my-8 border-solid border border-black font-body text-base hover:bg-black hover:text-pink-custom ease-in-out transition duration-500">
          Back to Portfolio
        </a>
      </Link>
    </article>
  );
}
