/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import bcrypt from "bcryptjs";
import { connect } from "@/dbConfig/dbConfig";
import usersModel from "@/models/Users";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();
        const user = await usersModel
          .findOne({ email: credentials?.email })
          .select("+password");
        if (!user) throw new Error("User not found!");

        const isValidPassword = await bcrypt.compare(
          credentials?.password || "",
          user.password
        );
        if (!isValidPassword) throw new Error("Invalid password!");

        return { id: user._id.toString(), name: user.name, email: user.email };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 900, // ⏳ Session expires in 15 minutes
  },
  callbacks: {
    async jwt({ token }: { token: JWT }) {
      token.expiresAt = Date.now() + 900 * 1000; // 15 minutes expiration
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: any;
    }): Promise<any> {
      if (Date.now() > token?.expiresAt) {
        return null;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
