import { fetchUserData } from "./helpers/ejercicio1";
import { fetchPostWithError,errorSet } from "./helpers/ejercicio2";
import { fetchMultipleResources } from "./helpers/ejercicio3";
const dataURL = import.meta.env.VITE_DATA_URL;

// fetchUserData(dataURL)
// .then(()=>{
//     console.log("Data obtenida correctamente");
// })
// .catch((error)=>{
//     console.log("Error: ",error);
// })

// fetchPostWithError("miscojonsesDAta")
// .then(()=>{
//     console.log(errorSet);
// })
// .catch((error)=>{
//     console.log("Error: ",error);
// })

fetchMultipleResources();