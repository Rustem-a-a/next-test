import React from 'react';
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import UserPosts from "@/components/UserPosts";
import {Suspense} from "react";
import {Metadata} from "next";
import getAllUsers from "@/lib/getAllUsers"; //for suspense loading
import {notFound} from "next/navigation";
import {getRscError} from "next/dist/build/webpack/plugins/wellknown-errors-plugin/parseRSC";

type Props = {
    params: {
        userId: string
    }
}


export async function generateMetadata({params: {userId}}: Props): Promise<Metadata> {
    const response: Promise<User> = getUser(userId)
    const user: User = await response
    if (!user) {
        return {
            title: 'Not Found | Full Next'
        }
    }
    return {
        title: `${user.username} | Full Next`
    }

}

const MyComponent = async ({params: {userId}}: Props) => {
    const userData: Promise<User> = getUser(userId)
    const postsData: Promise<Post[]> = getUserPosts(userId)
    // const[user,userPosts] = await Promise.all([userData,postsData])
    const user = await userData
    if (!user) {
        return notFound()
    }///DON'T WORK AT MY APP
    return (
        <>
            <h1>{user.name}</h1>
            <Suspense fallback={<h2>Posts is Loading...</h2>}>
                {/* @ts-expect-error Server Component */}
                <UserPosts promise={postsData}/>
            </Suspense>
        </>
    );
};

export default MyComponent;

export async function generateStaticParams() {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData
    return users.map(user => ({
        userId: user.id.toString()
    }))
}

