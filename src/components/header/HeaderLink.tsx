'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  title: string;
  protect?: boolean;
}

const HeaderLink = ({ href, title, protect = false }: Props) => {
  const sesion = useSession();
  const pathname = usePathname();
  const isSelected = pathname === href;
  console.log(isSelected);

  if (protect && !sesion.data?.user) {
    return <></>;
  }

  return (
    <Link
      className={`flex ${
        isSelected ? 'underline' : ''
      } items-center justify-center font-semibold uppercase leading-none tracking-wider text-blue-50 decoration-2 underline-offset-4 duration-200 hover:text-blue-400 hover:underline`}
      href={href}
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
