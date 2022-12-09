import NextAuth, { type NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session }) {
      if (session.user) {
        console.log(session);
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
