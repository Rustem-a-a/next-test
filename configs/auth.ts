import {NextAuthOptions} from "next-auth";
import GoggleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt' //sec
import {PrismaAdapter} from '@next-auth/prisma-adapter' //sec
import prisma from '../lib/prismadb'
import * as process from "process"; //sec


export const authConfig: NextAuthOptions = {
    // adapter: PrismaAdapter(prisma), //sec
    providers: [
        // GoggleProvider({
        //     clientId: process.env.GOOGLE_ID!,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET! // or as string
        // }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string // or as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "jsmith"},
                password: {label: "Password", type: "text"}
            },
            async authorize(credentials) {
                // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                if (!credentials.username || !credentials.password) {
                    // Any object returned will be saved in `user` property of the JWT
                    throw new Error('Invalid credentials, you dont put their')
                }
                console.log('yes1')

                const userDB = await prisma.user.findFirst({
                    where: {
                        username: credentials.username
                    }
                })
                console.log('user is: '+ JSON.stringify(userDB))
                if (!userDB || !userDB?.hashedPassword) {
                    throw new Error('Invalid credentials')
                }
                console.log('password - ' +credentials.password)
                console.log('userDB password - ' +userDB.password)
                const isCorrect = await bcrypt.compare(credentials.password, userDB.hashedPassword)
                    if (!isCorrect){
                        throw new Error('Password is not matches')
                    }
                    const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                return user
            }

        })
    ],
    pages: {
        signIn: '/signin'//for default page
    },
    debug:process.env.NODE_ENV === 'development',
    session:{
        strategy:"jwt"
    },
    secret:process.env.NEXTAUTH_SECRET
}


//
//
// CredentialsProvider({
//     name: "Credentials",
//     credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith"},
//         password: { label: "Password", type: "password"}
//     },
//     async authorize(credentials, req) {
//         const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
//
//         if (credentials.username && credentials.password ) {
//             // Any object returned will be saved in `user` property of the JWT
//             return user
//         } else {
//             // If you return null then an error will be displayed advising the user to check their details.
//             return null
//
//             // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//         }
//     }
// })