export default async function getUserPosts (id:string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`,{next:{revalidate:2}}
        //ISR is chaking and rerender after 60 second

        // {cache:"force-cache"}//default value
        // {cache:"no-store"} // no cashe data
    )
    if(!response.ok){
        throw new Error('User data in not fetching')
    }
    return await response.json()
}