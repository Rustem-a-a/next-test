import {NextResponse} from "next/server";
import {getLimiter} from "@/app/api/config/limiter";
import {headers,cookies} from "next/headers";
import {name} from "next/dist/telemetry/ci-info";

export async function GET(){
    const remaining = await getLimiter.removeTokens(1)

    // Read Headers
    const headersList = headers()
    const origin = headersList.get('Origin')
    console.log('Origin from /get:' + origin)

    // Read cookies
    const cookiesList = cookies()
    const Cookie_1 = cookiesList.get("Cookie_1")?.value
    console.log('Cookie_1 from /get:' + Cookie_1)




    console.log('remaining = '+ remaining)
    return NextResponse.json('Hello world ')
}