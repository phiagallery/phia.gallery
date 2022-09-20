import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const paragraphAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const spanAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const renderTagline = (tagline: any) => {
  const titles: any[] = [];
  tagline.forEach((text: any, index: any) => {
    titles.push({ id: index, text });
    if (index + 1 < tagline.length) titles.push({ id: index, span: true });
  });

  return titles.map(({ id, text, span }) => {
    if (span) {
      return (
        <motion.span
          key={`subtitle-span-${id}`}
          variants={spanAnimation}
          className="rounded-full inline-block h-2 w-2 mx-2 mt-1 bg-black"
        />
      );
    }
    return (
      <motion.span key={`subtitle-${id}`} variants={spanAnimation}>
        {text}
      </motion.span>
    );
  });
};

export default function Hero({ title, tagline, backgroundImage }: any) {
  // const isMobile = useIsMobile();

  // const desktopImage = require(`../../images/home/${backgroundImage}?resize&size=2000`);
  // C:\VGuanJam\sg.me\images\home\header-background.jpg
  // const desktopImage = require(`../../../images/home/header-background.jpg?resize&size=2000`);
  // const desktopImage = require("../../../images/home/header-background.jpg");

  // const mobileImage = require(`../../../images/home/${backgroundImage}?resize&size=1000`);
  // const mobileImage = require("../../../images/home/header-background.jpg");

  // const image = isMobile ? mobileImage : desktopImage;
  // const image = "../../../images/home/header-background.jpg";

  // const image = "/images/header-background.jpg"; // worked:  in the public/ directory
  // const image = "../../../images/home/header-background.jpg"; //   in the images/home directory
  // const bkImage = `/images/${backgroundImage}`;
  return (
    <section id="hero">
      <div className="w-screen h-screen md:bg-fixed flex justify-center items-center flex-col font-title bg-cover bg-top">
        <Image
          className="z-0"
          alt="hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          // src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
          // src="/images/header-background.jpg"
          // src={bkImage}
          src={`/images/home/${backgroundImage}`}
        />
        {/* </div> //`/images/${backgroundImage}`
      <div
        className="w-screen h-screen md:bg-fixed flex justify-center items-center flex-col font-title bg-cover bg-top"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      > */}
        <h1 className="text-center text-7xl block z-10">{title}</h1>
        <motion.p
          variants={paragraphAnimation}
          initial="hidden"
          animate="visible"
          className="block mt-5 mb-20 flex items-center text-xl z-10"
        >
          {renderTagline(tagline)}
        </motion.p>
      </div>
    </section>
  );
}
