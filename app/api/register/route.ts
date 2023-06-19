import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
import prisma from '../../../lib/prismadb'

export async function POST (request:Request){
    const body:{username:string,password:string} = await request.json()
    const {
        username,
        password
    } = body
    const hashedPassword = await bcrypt.hash(password,12)
    console.log(hashedPassword)
    const user = await prisma.user.create({
        data:{username:username,hashedPassword:hashedPassword}
    })

    return NextResponse.json(user)
}