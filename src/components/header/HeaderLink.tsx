import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  title: string;
}

const HeaderLink = ({ href, title }: Props) => {
  return (
    <Link
      className="flex items-center justify-center font-semibold uppercase leading-none tracking-wider text-blue-50 underline-offset-4 duration-200 hover:text-blue-400 hover:underline"
      href={href}
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
