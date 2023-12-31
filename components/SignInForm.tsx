'use client'
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import axios from "axios";

interface IFormInput {
    email:string,
    password:string
}


const SignInForm = () => {
    const [formInput, setFormInput] = useState<IFormInput>({} as IFormInput)
    const [isHaveAccount,setIsHaveAccount] = useState<boolean>(true)
    const router = useRouter()//to push route in url

    const handleFormInput = (event : ChangeEvent<HTMLInputElement>)=>{
        setFormInput({...formInput,[event.target.name]:event.target.value})

    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        // const formData = new FormData(e.currentTarget) //if i dont use useState and use only form options
        const res = await signIn('credentials',{
            username: formInput.email, // if i dont use useState and use only form options formData.get('email')
            password:formInput.password, // formData.get('password'),
            redirect:false //if error case we stay on this page and not redirected to default page
        })
        // if(res?.ok){router.refresh()}
        console.log('res: ' + JSON.stringify(res))
        setFormInput({email:'',password:''})

        if(res){
            router.push('/profile')
        }
    }

    const handleSubmitRegister = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const {data} = await axios.post('/api/register',{
            username: formInput.email,
            password:formInput.password,
        })
    }


    return (
        <>
            {isHaveAccount
            ?   <form className={'flex flex-col content-center justify-center gap-4 mt-4'} onSubmit={handleSubmit}>
                    <input className={'max-w-2xl'} type="text" name="email" onChange={handleFormInput} required autoComplete='false'/>
                    <input className={'max-w-2xl'} type="text" name="password" onChange={handleFormInput} required/>
                    <button className={'bg-blue-400 text-2xl text-black max-w-2xl rounded-sm px-2 hover:bg-blue-600'}  type="submit">Log In</button>
                    <p className={'cursor-pointer text-center'} onClick={()=>setIsHaveAccount(p=>!p)}>I do not have account</p>
                </form>
            :    <></>
                // <form className={'flex flex-col content-center justify-center gap-4 mt-4'} onSubmit={handleSubmitRegister} >
                //     <input className={'max-w-2xl'} type="text" name="email" onChange={handleFormInput} required/>
                //     <input className={'max-w-2xl'} type="text" name="password" onChange={handleFormInput} required/>
                //     <button className={'bg-blue-400 text-2xl text-black max-w-2xl rounded-sm px-2 hover:bg-blue-600'}  type="submit">Registration</button>
                //     <p className={'cursor-pointer text-center'} onClick={()=>setIsHaveAccount(p=>!p)}>I have account</p>
                // </form>
            }

        </>

    );
};

export default SignInForm;
