import React from "react";
import {
  FaTwitter,
  // FaLinkedinIn,
  FaInstagram,
  FaEtsy,
  FaTiktok,
} from "react-icons/fa";
import ExternalLink from "./links/ExternalLink";

const socials = [
  {
    id: "instagram",
    Icon: FaInstagram,
    href: "https://www.instagram.com/phiagallery/?hl=en",
  },
  {
    id: "etsy",
    Icon: FaEtsy,
    href: "https://www.etsy.com/shop/byPhia",
  },
  {
    id: "tiktok",
    Icon: FaTiktok,
    href: "https://www.tiktok.com/@phiagallery",
  },
  {
    id: "twitter",
    Icon: FaTwitter,
    href: "https://twitter.com/phiagallery",
  },
];

export default function SocialIcons() {
  return (
    <div className="flex flex-row items-center justify-center">
      {socials.map(({ id, Icon, href }) => (
        <ExternalLink key={`social-icon-${id}`} href={href} className="px-2">
          <Icon />
        </ExternalLink>
      ))}
    </div>
  );
}
