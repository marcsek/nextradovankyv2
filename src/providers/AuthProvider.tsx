'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import type { Session } from 'next-auth/core/types';

interface Props {
  children: React.ReactNode;
  session: Session | null;
}

const AuthProvider = ({ children, session }: Props) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
