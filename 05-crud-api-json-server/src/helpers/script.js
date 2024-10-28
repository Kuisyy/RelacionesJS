/**
 * @author:Luis Maldonado Hernandez
 * @description: Examen repsao JS T1
 */

/**
 * @description: Funcion que inserta una promesa
 * @param
 */
const categoria = "cateorias";
const productos = "prodcutos";
const dataUrl = "http://localhost:4000/";


export const insertProduct = async (newProduct)=>{
    const products  =await getProducts();
    if(products.has(newProduct.id)){
        console.log("El producto ya existe");
        return;
    };
    const categorias = await getCategories();
    if(!categorias.has(newProduct.categoria)){
        await insertCategories(newProduct.categoria);
    };

    try {
        
        const response = await fetch(`${dataUrl}${productos}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        });
        if(!response.ok){
            throw new Error("Error al insertar producto");
        };
        const product = await response.json();
        console.log("Producto creado correctamente", product);
        return product;
    } catch (error) {
        console.error("Error",error);
    }
};


export const getCategories = async ()=>{
    try {
        const response = await fetch(`${dataUrl}${categoria}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok){
            throw new Error("Error al obtener categoria");
        }
        const categories = await response.json();
        let categorias = new Set();
        categories.forEach(categoria => {
            categorias.add(categoria.nombre);
        });
        return categorias;

    } catch (error) {
        console.log("Error:",error);
    }
}
export const getProducts= async()=>{
    try {
        const response = await fetch(`${dataUrl}${productos}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok){
            throw new Error("Error al obtener productos");
        }
        const productId = await response.json();
        let productsId= new Set();
        productId.forEach(product =>{
            productsId.add(product.id);
        })
        return productsId;
    } catch (error) {
        console.log("Error:",error);
    }
}
export const insertCategories = async(category)=>{
    try {
        const response = await fetch(`${dataUrl}${categoria}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre: category })
        });
        if(!response.ok){
            throw new Error("Error al insertar categoria");
        };
        const newCategory = await response.json();
        console.log("Categoria creada correctamente", newCategory);
        return newCategory;
        
    } catch (error) {
        console.error("Error: ",error);
    }
}