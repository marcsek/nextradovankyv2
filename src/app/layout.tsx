import React from 'react';
import '../styles/globals.css';
import Header from '../components/header';
import AuthProvider from '../providers/AuthProvider';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await unstable_getServerSession(authOptions);

  return (
    <html lang="eng">
      <body>
        <main className="background min-h-screen bg-background">
          <section>
            <AuthProvider session={session}>
              <Header />
              <div className="flex justify-center px-16 py-8">{children}</div>
              <footer></footer>
            </AuthProvider>
          </section>
        </main>
      </body>
    </html>
  );
};

export default Layout;
