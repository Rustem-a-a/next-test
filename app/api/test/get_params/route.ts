import {NextResponse} from "next/server";

export async function GET(request:Request){
    const {searchParams} = new URL(request.url)
    const obj = Object.fromEntries(searchParams.entries())
    // const id = searchParams.get('id') //from pull some params
    return NextResponse.json(obj)

}