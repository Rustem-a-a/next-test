import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Facebook from 'next-auth/providers/facebook'
import Google from 'next-auth/providers/google'
import {authConfig} from "@/configs/auth";

const handler =  NextAuth(authConfig)

export {handler as GET, handler as POST}