import React from "react";

export default function ExternalLink({ href, className, style, children } : any) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
