import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { animateScroll as scroller } from "react-scroll";
import { motion } from "framer-motion";

const scrollToElement = (id: any) => {
  const el = document.getElementById(id);
  if (el) {
    const scollToPx = el.offsetTop;
    scroller.scrollTo(scollToPx, {
      duration: 100,
      smooth: true,
    });
  }
};

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Layout: React.FC<Props> = ({ children, pageTitle }: Props) => {
  // export default function Layout({ children } : any) {
  const { query } = useRouter();

  useEffect(() => {
    if (query && query.scrollTo) {
      const { scrollTo } = query;
      scrollToElement(scrollTo);
    }
  }, [query]);

  return (
    <>
      <motion.div
        className="min-h-screen"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        <main className="overflow-hidden">{children}</main>
      </motion.div>
    </>
  );
};

export default Layout;
