import React from "react";
import EmailLink from "./links/EmailLink";
import ExternalLink from "./links/ExternalLink";
import SocialIcons from "./SocialIcons";
import { AppConfig } from "@core/config/app.config";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center flex-col font-body">
      <EmailLink className="p-4" />
      <SocialIcons />
      <p className="m-8 text-center">
        &copy; Designed by Phia Gallry,
        <ExternalLink href={AppConfig.createdInfo.createdBy}>
          {" "}
          Created by {AppConfig.createdInfo.createdBy}
        </ExternalLink>
      </p>
    </footer>
  );
}
