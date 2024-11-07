export const errorSet = new Set();

// export const fetchPostWithError = async (dataURL) => {

//     try {
//         const response = await fetch(dataURL,{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body: JSON.stringify({title:"Los enanitos"})
//         });
    
//         if(!response.ok){
//             throw new Error("No va el post");
//         }
//         const data = await response.json();
//         console.log("Bien aqui tienes la data; ",data);
//     } catch (error) {
//         console.log("Error: ",error);
//         errorSet.add(error);
//     }
// }

/**
 * @description: Ejericio 2 de ejercicios de repaso
 * @param {String} dataURL 
 * @returns {Set} errorSet
 */
export const fetchPostWithError = (dataURL) =>{
    return fetch(dataURL,{
        method : "POST",
        headers:{
            "Content-type":"application/json"
        },
        body : JSON.stringify({title: "Aro que si premo"})
    })
    .then((response)=>{
        if(!response.ok){
            throw new Error("No se ha cargado la data");
        }
        return response.json;
    })
    .then((data)=>{
        console.log("Felicidades aqui esta tu data: ",data);
    })
    .catch((error)=>{
        errorSet.add(error);
    })
}