import React from 'react';
import {Metadata} from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata = {
    title: "users | Full Next"
}

const MyComponent = async () => {
    const data:Promise<User[]> = await getAllUsers()
    const users = await data
    return (
        <div>
            Users:
            {users.map(user=> <ol key={user.id}>
                <li>
                    <Link href = {`/users/${user.id}`}>{user.name}</Link>
                </li>
            </ol> )}
        </div>
    );
};

export default MyComponent;
