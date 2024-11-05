import { getProducts } from "./getProducts";

/**
 * @description:1.-Crear una funcion llamada generateproductmap que le pase como paramatero una data de productos y automaticamente me devuelva un map 	cuya clave es el nombre del producto y cuyo valor es un objeto con el precio, cantidad, array de tallas disponibles y array de 	colores.
	Si se le pasa como segundo parametro la palabra save, almacenara dicho map en el localStorage en la clave data,productos, siempre y cuando no exista ya esa clave en el localStorage.
 * 
 */

// getProducts($dataURL)
// .then((productos)=>{
// 	const prodcutMap = new Map();
// 	productos.forEach(nombre,precio,stock,detalles => { 
// 		prodcutMap.set(nombre,{
// 			precio: precio, //Aqui peudes quitar lo de precio:precio y dejarlo en precio
// 			cantidad: stock.cantidad,
// 			tallas: detalles.colores,
// 			colores:	detalles["tallas disponibles"] // IMPORTANTE SI UN HAY ESPACIO 
// 		})	
// 	});
// })
// .catch((error)=> console.log("Error",error));

/**
 * 
 * @param {Function<url>} getProducts 
 * @param {String} save 
 * @param {String} url 
 * @returns {Map<String,Object>} mapProductos
 */
export const generateProductMap = async (getProducts, url, save = "noSave") => {
    try {
        const dataProducts = await getProducts(url);
        const productMap = new Map();

        dataProducts.forEach(product => {
            const { nombre, precio, stock, detalles } = product;
            productMap.set(nombre, {
                precio,
                cantidad: stock.cantidad,
                colores: detalles.colores, 
                tallas: detalles["tallas disponibles"] 
            });
        });

        // if (save === "save" && !localStorage.getItem("dataProductos")) {
        //     localStorage.setItem("dataProductos", JSON.stringify([...productMap]));
        // }
		!localStorage.hasOwnProperty("dataProductos") && localStorage.setItem("dataProductos", JSON.stringify([...productMap]));

        return "Guardado en localStorage"; 

    } catch (error) {
        console.error("Error:", error);
    }
};