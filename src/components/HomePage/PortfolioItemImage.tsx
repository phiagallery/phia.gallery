import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useAnimationOnScroll from "@core/hooks/useAnimationOnScroll";

export default function PortfolioItemText(props: any) {
  const { title, image, transition, variants } = props;
  const [viewRef, animate, setAnimationHasRun] = useAnimationOnScroll("show");

  const srcImage = `/images/portfolio/${image}`;

  return (
    <div ref={viewRef} className="w-full md:mx-4">
      {/*  TODO : replace next/image */}
      <motion.div
        initial="hideImage"
        animate={animate}
        variants={variants}
        transition={transition}
        onAnimationComplete={setAnimationHasRun}
        className="w-full h-full relative"
      >
        <div className="">
          <Image
            alt={`Cover Image for ${title}`}
            src={srcImage}
            className="w-full object-cover h-full md:max-h-p-item"
            // width={1200}
            // height={400}
            layout="fill"
          />
        </div>
      </motion.div>

      {/* <motion.img
        initial="hideImage"
        animate={animate}
        variants={variants}
        transition={transition}
        onAnimationComplete={setAnimationHasRun}
        src={srcImage}
        // srcSet={image}
        alt={`Cover Image for ${title}`}
        className="w-full object-cover h-full md:max-h-p-item"
      /> */}
    </div>
  );

  // const {
  //   src,
  //   srcSet,
  // } = require(`../../images/portfolio/${image}?resize&sizes[]=300&sizes[]=600&sizes[]=900`);
  // return (
  //   <div ref={viewRef} className="w-full md:mx-4">
  //     <motion.img
  //       initial="hideImage"
  //       animate={animate}
  //       variants={variants}
  //       transition={transition}
  //       onAnimationComplete={setAnimationHasRun}
  //       src={src}
  //       srcSet={srcSet}
  //       alt={`Cover Image for ${title}`}
  //       className="w-full object-cover h-full md:max-h-p-item"
  //     />
  //   </div>
  // );
}
