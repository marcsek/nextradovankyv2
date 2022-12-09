'use client';

import { FiLogOut } from 'react-icons/fi';
import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="focus:duration-0  flex w-max items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-2 text-lg font-semibold text-gray-200  outline-2 outline-blue-400 transition duration-200 hover:bg-blue-500 focus:outline"
    >
      <FiLogOut className="inline" size="1.33rem" />
      Logout
    </button>
  );
};

export default LogoutButton;
