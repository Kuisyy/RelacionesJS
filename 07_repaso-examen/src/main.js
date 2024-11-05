/**
 * @author: Luis Maldonado Hernández
 */

import { generateProductMap } from "./helpers/ejercicio1"
import { modificarTallas } from "./helpers/ejercicio2";
import { getProducts } from "./helpers/getProducts";
const dataURL = `${import.meta.env.VITE_DATA_URL}/productos`;


const init = async()=>{
    // const result3 = await generateProductMap(getProducts,dataURL);
    // console.log(result3);
    const result4 = await modificarTallas(getProducts,dataURL);
    console.log(result4);
}


init();