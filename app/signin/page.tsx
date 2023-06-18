'use client'
import React from 'react';

import {signIn} from "next-auth/react";
import SignInButton from "@/components/SignInButton";
import SignInForm from "@/components/SignInForm";

const SignIn = () => {
    return (
        <div className={'flex justify-center content-center items-center flex-col'}>
            Sign In Page
            <br/>
            <SignInButton/>
            <SignInForm/>
        </div>
    );
};

export default SignIn;
