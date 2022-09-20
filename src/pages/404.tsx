import * as React from "react";
import { RiAlarmWarningFill } from "react-icons/ri";

// import Layout from "@/components/layout/Layout";
// import ArrowLink from "@/components/links/ArrowLink";
// import Seo from "@/components/Seo";

import Layout from "@core/genericComponents/Layout";
import ArrowLink from "@core/genericComponents/links/ArrowLink";
// import { SeoMeta } from "@core/genericComponents/seo/SeoMeta";

export default function NotFoundPage() {
  return (
    <Layout>
      {/* <SeoMeta templateTitle="Not Found" /> */}
      {/* <SeoMeta /> */}
      <main>
        <section className="bg-white">
          <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-black">
            <RiAlarmWarningFill
              size={60}
              className="animate-flicker drop-shadow-glow text-red-500"
            />
            <h1 className="mt-8 text-4xl md:text-6xl">Page Not Found</h1>
            <ArrowLink className="mt-4 md:text-lg" href="/">
              Back to Home
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
