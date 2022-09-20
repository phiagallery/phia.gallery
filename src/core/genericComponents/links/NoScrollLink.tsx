import React from 'react';
import Link from 'next/link';

const NoScrollLink = ({
  children,
  href,
  passHref,
  as,
} : any) => (
  <Link href={href} passHref={passHref} as={as} scroll={false}>
    {children}
  </Link>
);

export default NoScrollLink;
