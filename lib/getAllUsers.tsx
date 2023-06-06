export default async function getAllUsers (){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response.ok){
        throw new Error('Data in not fetching')
    }
    return await response.json() ;
};

