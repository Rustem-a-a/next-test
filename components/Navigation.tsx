'use client'
import React from 'react';
import Link from "next/link";
import {FaYoutube,FaTwitter,FaGithub,FaLaptop} from "react-icons/fa";
import {useSession,signIn,signOut} from "next-auth/react";

const MyComponent = () => {
    const session = useSession()
    console.log(session)
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">
                        Rustem Abdulaev
                    </Link>
                </h1>

                <div className="flex flex-row justify-center sm:justify-evenly align-middle align-middle gap-4 text-white text-4xl lg:text-5xl">
                    <Link href="https://www.youtube.com" target="_blank" className="text-white/90 hover:text-white"><FaYoutube/></Link>
                    <Link href="https://www.twitter.com" target="_blank" className="text-white/90 hover:text-white"><FaTwitter/></Link>
                    <Link href="https://www.github.com" target="_blank" className="text-white/90 hover:text-white"><FaGithub/></Link>
                    {/*<Link href="https://www.youtube.com" className="text-white/90 hover:text-white"><FaYoutube/></Link>*/}
                </div>
                {session?.data && <Link href="/profile">Profile</Link>}
                {session?.data
                    ? <Link href="#" onClick={()=>signOut({
                    callbackUrl:'/',
                        redirect:true}
                    )}>Sign out</Link>
                    : <Link href="/api/auth/signin">Sign in</Link>}

            </div>
        </nav>
    );
};

export default MyComponent;
