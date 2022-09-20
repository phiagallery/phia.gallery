import React from "react";
import { AppConfig } from "@core/config/app.config";

export default function EmailLink({ className }: any) {
  // href="mailto:gemcloud85@gmail.com?subject=Saying%20hello%20from%20the%20website&body=Hi Sophia,"
  // + {AppConfig.email.emailAddress}
  return (
    <a
      className={className}
      href="mailto:phiagallery@gmail.com?subject=Saying%20hello%20from%20the%20website&body=Hi PhiaGallery,"
    >
      {AppConfig.email.emailAddress}
    </a>
  );
}
