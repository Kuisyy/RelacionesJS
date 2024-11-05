/**
 * @description: 2.-Crear una funcion llamada modificarTallas que le pase como parametro la data (o la funcion que trae la data) y que añada la talla 		XS a todas las prendas deportivas. Me mostraras por pantalla todos los nombre de los productos que han sido modificados. 
 * 
 * @param {Function} getProducts - A function that fetches product data
 * @param {String} url - URL to fetch the product data
 * @returns {Promise<void>} - A promise that resolves once the function completes
 */

export const modificarTallas = async (getProducts, url) => {
    try {
        // Fetch the data using the provided function
        const dataProducts = await getProducts(url);
        const arrayNamesProductsModified = [];
        
        const productosModificados = dataProducts.map(async(producto)=>{
            const {id,nombre,categoria,detalles} = producto;
            if(categoria.nombre = "Ropa" && categoria.subcategorias.includes("Deportiva")&& !detalles["tallas disponibles"].includes("XS")){
                // detalles["tallas disponibles"]=[...detalles["tallas disponibles"],"XS"];
                detalles["tallas disponibles"].unshift("XS");
                arrayNamesProductsModified.push(nombre);
                //envio a la API 
                //Verificar url ya que aqui seria localhost:4000/productos/id
                const response = await fetch(`${url}/${id}`,{    //AL METERLE DENTRO DEL MAP AWAIT NECESIA EN EL MAP ASYNC
                    method:"PUT",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(producto)
                })
                if(!response.ok){
                    throw new Error("Error en la modificacion de tallas");
                }
                return producto;
            }
        })

    } catch (error) {
        console.error("Error modificando tallas:", error);
    }
};
