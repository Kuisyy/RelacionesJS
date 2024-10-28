import { getCategories, getProducts, insertProduct, } from "./helpers/script";

const data =
    {
        id: "10",
        nombre: "Producto 8",
        descripcion: "Producto de alta calidad",
        precio: 100,
        stock: 100,
        imagen: "",
        categoria: "Categoria 9"
      
};

insertProduct(data);
// getCategories(data);
// console.log(getProducts(data.id));