'use client';

import { AiFillGithub } from 'react-icons/ai';
import { signIn } from 'next-auth/react';

const GithubButton = () => {
  return (
    <button
      onClick={() => signIn('github', { callbackUrl: '/' })}
      className="focus:duration-0  flex w-max items-center justify-center gap-2 rounded-lg bg-neutral-700 px-8 py-2 text-lg font-semibold text-gray-200  outline-2 outline-neutral-500 transition duration-200 hover:bg-neutral-600 focus:outline"
    >
      <AiFillGithub className="inline" size="1.33rem" />
      GitHub
    </button>
  );
};

export default GithubButton;
