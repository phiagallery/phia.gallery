/***
Why will we create _document.js in pages directory and write this default setup in _document.js?
Because to serve content from Next.js getInitalProps!
****/

import React from "react";
import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Favicon from "@core/genericComponents/seo/Favicon";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<Record<string, unknown> & { html: string }> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <Favicon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
