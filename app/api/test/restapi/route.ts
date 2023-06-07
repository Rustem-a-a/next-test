import{NextResponse} from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
const API_KEY = process.env.DATA_API_KEY



export async function GET (){
    const response = await fetch(DATA_SOURCE_URL)
    const todos:Todo[] = await response.json()
    return NextResponse.json(todos)
}



export async function DELETE (request:Request){
    console.log('Start')
    const {id} :Partial<Todo[]> = await request.json()
    if(!id)return NextResponse.json({message:"Id is required"})
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



export async function POST(request:Request){
    console.log('Start')
    const {userId,title} :Partial<Todo[]> = await request.json()
    if(!userId || !title)return NextResponse.json({message:"UserId and title is required"})
    const response = await fetch(DATA_SOURCE_URL,{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            "API-Key" : API_KEY
        },
        body:JSON.stringify({
            userId,
            title,
            completed:false
        })
    })
    const newTodo : Todo = await response.json()
    return NextResponse.json(newTodo)
}



export async function PUT(request:Request){
    console.log('Start')
    const {userId,title,id,completed} :Todo = await request.json()
    console.log({
        id,
        userId,
        title,
        completed
    })
    if(!userId || !title || !id || typeof(completed) !== "boolean")return NextResponse.json({message:"All data is required"})
    const response = await fetch(`${DATA_SOURCE_URL}/${id}`,{
        method:'PUT',
        headers: {
            "Content-Type": "application/json",
            "API-Key" : API_KEY
        },
        body:JSON.stringify({
            userId,
            title,
            completed
        })
    })
    const updatedTodo : Todo = await response.json()
    return NextResponse.json(updatedTodo)
}