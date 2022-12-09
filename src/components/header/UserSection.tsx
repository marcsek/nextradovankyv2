'use client';

import { useSession } from 'next-auth/react';
import React from 'react';
import Image from 'next/image';

const UserSection = () => {
  const session = useSession();

  if (!session.data?.user) return <></>;

  return (
    <>
      {session ? (
        <div className="flex items-center justify-center gap-4">
          <div className="relative h-6 w-6 overflow-hidden rounded-full">
            <Image className="object-fill" src={session.data?.user?.image ?? ''} alt="Profile Picture" fill={true}></Image>
          </div>
          <span className="text-lg font-semibold text-gray-100">{session.data?.user?.name}</span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default UserSection;
