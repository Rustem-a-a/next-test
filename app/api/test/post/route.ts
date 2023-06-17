import {NextResponse} from "next/server";

type Feedback = {
    name?:string
    email?:string,
    message?:string
}

export async function POST(request:Request){
    const data : Feedback = await request.json()
    const {message,name,email} = data
    console.log({message,name,email})

    return NextResponse.json(data)
}