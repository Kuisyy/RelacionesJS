/**
 * @description: Trae los productos de la API
 * @param {String} urlProducts 
 * @returns {Promise<Array>}
 */
export const getProducts = async (urlProducts)=>{
    try {
        const response = await fetch(urlProducts);
        
        if(!response.ok){
            throw new Error("Error en getProducts");
        }
        const dataProducts= await response.json();
        return dataProducts;
        
    } catch (error) {
        console.error("Error: ",error);
    }
}