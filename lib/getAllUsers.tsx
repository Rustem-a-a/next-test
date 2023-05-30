
export default async function (){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response){
        throw new Error('Data in not fetching')
    }
    return await response.json() ;
};

