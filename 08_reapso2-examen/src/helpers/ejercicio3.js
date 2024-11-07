
const dataURL = import.meta.env.VITE_DATA_URL;

// export const fetchMultipleResources = async ()=>{
//     try {
//         const promises = [
//         fetch(`${dataURL}/users`),
//         fetch(`${dataURL}/posts`),
//         fetch(`${dataURL}/comments`)
//         ]

//     const [usersRespsonse,postsResponse,commentsResponse] = await Promise.all(promises);

//     //FORMA MAS RAPIDA 
//     // const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
//     //     fetch('https://jsonplaceholder.typicode.com/users'),
//     //     fetch('https://jsonplaceholder.typicode.com/posts'),
//     //     fetch('https://jsonplaceholder.typicode.com/comments')
//     //   ]);

//     if(!usersRespsonse.ok || !postsResponse.ok || !commentsResponse.ok){
//         throw new Error("Error al cargar la data");
//     }

//     const dataUsers = await usersRespsonse.json();
//     const dataPosts = await postsResponse.json();
//     const dataComments = await commentsResponse.json();

//     const resourcesMap= new Map();
//     resourcesMap.set("Usuarios: ",dataUsers)
//     resourcesMap.set( "Posts: ",dataPosts)
//     resourcesMap.set("Comments: ",dataComments)

//     } catch (error) {
//         console.log("Error: ",error);
//     }    
// }

export const fetchMultipleResources = async ()=>{

    const [usersRespsonse,commentsResponse,postsResponse]= await Promise.allSettled([
        fetch(`${dataURL}/users`),
        fetch(`${dataURL}/comments`),
        fetch(`${dataURL}/response`)
    ])

    if(!usersRespsonse.ok || !postsResponse.ok || !commentsResponse.ok){
        throw new Error("Error al cargar la data");
    }
}