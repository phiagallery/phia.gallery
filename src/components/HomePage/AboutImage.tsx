import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useAnimationOnScroll from "@core/hooks/useAnimationOnScroll";

const variants = {
  hide: { x: -700, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export default function AboutImage({ transition, image }: any) {
  const [viewRef, animate, setAnimationHasRun] = useAnimationOnScroll("show");
  // const {
  //   src,
  //   srcSet,
  // } = require(`../../../images/${image}?resize&sizes[]=400&sizes[]=700&sizes[]=1000`);
  return (
    <div ref={viewRef} className="w-full">
      <motion.div
        initial="hide"
        animate={animate}
        variants={variants}
        transition={{ type: "spring", ...transition }}
        onAnimationComplete={setAnimationHasRun}
        className="w-full h-full relative"
      >
        {/* <img src={require("./my-image.jpg")} /> */}
        {/* <img
          src={src}
          srcSet={srcSet}
          alt="phia"
          className="hidden md:block absolute z-0 object-cover w-overlap h-overlap max-w-overlap"
          data-testid="about-image"
        /> */}
        <div className="hidden md:block absolute z-0 object-cover w-overlap h-overlap max-w-overlap">
          <Image
            alt="Sophia"
            src={image}
            // src={myimage}
            className="object-cover w-overlap h-overlap max-w-overlap"
            // width={1200}
            // height={400}
            layout="fill"
          />
        </div>
      </motion.div>
    </div>
  );
}
