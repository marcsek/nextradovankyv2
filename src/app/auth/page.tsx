import React from 'react';
import GithubButton from '../../components/auth/GithubButton';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
import LogoutButton from '../../components/auth/LogoutButton';

const AuthPage = async () => {
  const session = await unstable_getServerSession(authOptions);

  return (
    <div className="grid items-center justify-items-center gap-12 rounded-xl bg-foreground/10 p-16 shadow-2xl backdrop-blur-sm">
      {session ? (
        <>
          <h1 className="flex items-start text-6xl font-bold leading-relaxed text-gray-100">
            You are signed in as &nbsp;
            <em className="inline-block">{session.user?.name}</em>
          </h1>
          <span className="h-1 w-full rounded bg-blue-500/80"></span>
          <LogoutButton />
        </>
      ) : (
        <>
          <h1 className="flex items-start text-6xl font-bold leading-relaxed text-gray-100">Log in here!</h1>
          <span className="h-1 w-full rounded bg-blue-500/80"></span>
          <GithubButton />
        </>
      )}
    </div>
  );
};

export default AuthPage;
