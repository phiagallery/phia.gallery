import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useAnimationOnScroll from "@core/hooks/useAnimationOnScroll";
import PrintMarkdownHTML from "@core/genericComponents/PrintMarkdownHTML";

const variants = {
  hide: { x: 700, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export default function AboutText({ transition, image, content }: any) {
  const [viewRef, animate, setAnimationHasRun] = useAnimationOnScroll("show");
  // const {
  //   src,
  //   srcSet,
  // } = require(`../../images/${image}?resize&sizes[]=150&sizes[]=300&sizes[]=450`);
  return (
    <div ref={viewRef} className="w-full z-10 pb-10">
      <motion.div
        initial="hide"
        animate={animate}
        variants={variants}
        transition={transition}
        onAnimationComplete={setAnimationHasRun}
        className="pt-12 mt-5 md:mt-12 w-full bg-grey-custom px-10 pb-10 h-full z-10"
      >
        <h2 className="text-6xl font-title mb-2 md:mb-0">About Me</h2>
        {/* <img
          src={src}
          srcSet={srcSet}
          alt="phia"
          className="md:hidden object-cover mb-2 md:mb-2"
        /> */}
        {/* <Image
          alt="Next.js logo"
          src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
          className="md:hidden object-cover mb-2 md:mb-2"
          // width={1200}
          // height={400}
          layout="fill"
        /> */}
        <div className="md:hidden object-cover mb-2 md:mb-2">
          <Image
            alt="phia hero"
            src={image}
            width={600}
            height={400}
            layout="responsive"
            // layout="fill"
          />
        </div>
        <PrintMarkdownHTML content={content} about />
      </motion.div>
    </div>
  );
}
