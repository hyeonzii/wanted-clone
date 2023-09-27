import { firestore } from './../../../../lib/firestore'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { FirestoreAdapter } from '@auth/firebase-adapter'
import { db } from '@/app/firebase'

/*const handler = NextAuth({
  adapter: FirestoreAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET || '',
    }),
  ],
})*/

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET || '',
    }),
  ],
}

export default NextAuth(authOptions)
