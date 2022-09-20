import React from "react";

export default function Container({ children }: any) {
  return (
    <div className="container 2xl:max-w-screen-xl mx-auto px-5">{children}</div>
  );
}
