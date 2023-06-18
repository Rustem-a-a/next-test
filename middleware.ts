import {NextRequest, NextResponse} from "next/server";
const allowedOrigins = process.env.NODE_ENV === 'production'
    ? ['https://www.yoursite.com', 'https://yoursite.com']
    : ['http://localhost:4000']


export async function middleware(request:NextRequest){
    // CONDITIONALS IS USED TO APPLY MIDDLEWARE TO SPECIFIC PATHS
    // const origin = request.headers.get("origin")

    const origin = request.headers.get("origin")
    console.log('origin : ' +   origin)
    if (origin && !allowedOrigins.includes(origin)){
        return NextResponse.json('Cors mistake')
    }


    // const regexpGet = new RegExp('/api/test/get')
    // const regexpResApi = new RegExp('/api/test/restapi')


    // if(request.url.includes('/api/test/get')){
    //
    // }



    // OR


    // if(regexpGet.test(request.url) || regexpResApi.test(request.url))
    // {
        console.log("start")
        console.log('middleware')
        console.log(request.url)
        console.log(request.method)
        // const origin = request.headers.get('origin')
        // console.log(origin)
    //     return NextResponse.next()
    // }
    // return NextResponse.json({message: 'path is not avaible'})
    return NextResponse.next()
}

// USE TO APPLY ABOVE MIDDLEWARE TO PATHS LISTED IN ARRAY
export const config = {
    matcher: ['/api/:path','/api/test/get']
}