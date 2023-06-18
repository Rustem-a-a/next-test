import {NextAuthOptions} from "next-auth";
import GoggleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";




export const authConfig : NextAuthOptions = {
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
                username: { label: "Username", type: "text", placeholder: "jsmith"},
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                if (credentials.username && credentials.password ) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    pages:{
        signIn:'/signin'//for default page
    }
}