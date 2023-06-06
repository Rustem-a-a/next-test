export default async function getUser (id:string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if(!response.ok){
        // throw new Error('User data in not fetching')
        return undefined //if in dynamic page use notFound
    }
    return await response.json()
}