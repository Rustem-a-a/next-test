'use client'
import React from 'react';
import {signIn} from "next-auth/react";

const SignInButton = () => {
    return (
        <button className={'bg-blue-400 text-2xl text-black max-w-2xl rounded-sm px-2 hover:bg-blue-600 mt-6'} onClick={()=>signIn('github',{callbackUrl:'https://google.com'})}>
            Sign in with Google
        </button>
    );
};

export default SignInButton;