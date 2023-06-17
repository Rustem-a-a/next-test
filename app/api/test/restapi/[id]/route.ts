// FIRST WAY
// import{NextResponse} from "next/server";
//
// const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
//
// export async function GET (response:Response){
//     const id = response.url.slice(response.url.lastIndexOf('/')+1)
//     console.log(id)
//     const resp = await fetch(`${DATA_SOURCE_URL}/${id}`)
//     const todo:Todo = await resp.json()
//     if(!todo.id) return NextResponse.json({message: "Todo not found"})
//     return NextResponse.json(todo)
// }

// SECOND WAY

import{NextResponse} from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

type Props = {
    params:{
        id:string
    }
}

export async function GET (response:Response, {params:{id}}:Props){
    const resp = await fetch(`${DATA_SOURCE_URL}/${id}`)
    const todo:Todo = await resp.json()
    if(!todo.id) return NextResponse.json({message: "Todo not found"})
    return NextResponse.json(todo)
}



const API_KEY = process.env.DATA_API_KEY
export async function DELETE (request:Request,{params:{id}}:Props){
    console.log('Start')
    const response = await fetch(`${DATA_SOURCE_URL}/${id}`,{
        method:'DELETE',
        headers: {
            "Content-Type": "application/json",
            "API-Key" : API_KEY
        }
    })
    console.log(await response.json())
    return NextResponse.json({message: `Todo with id ${id} is deleted`})
}