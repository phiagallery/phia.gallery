import React from "react";
import markdownStyles from "@styles/markdown-styles.module.css";

export default function PrintMarkdownHTML({ content, about }: any) {
  return (
    <div
      className={about ? markdownStyles.about : markdownStyles.markdown}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
