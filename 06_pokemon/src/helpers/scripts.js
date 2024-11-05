/**
 * @author: Luis Maldonado Hernández
 * @description: Simulacro examen T1 JS
 */

// Definición de variables
const dataURL = import.meta.env.VITE_DATA_URL;

// Funciones
/**
 * @description: Obtener todas las cartas pokemon y mapearlas por nombre
 */
export const getPokemons = async () => {

    try {
        const response = await fetch(`${dataURL}pokemons`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error("Error al obtener la carta");
        }

        const cards = await response.json();
        const cardsMap = new Map();
        cards.forEach((card) => {
            cardsMap.set(card.nombre, card);
        });
        return cardsMap;
    } catch (error) {
        console.error("Error: ", error);
    }
}
// export const addCard = async (newCardID)=>{
//     const cardsMap = await getPokemonsId();
//     const card = cardsMap.get(newCardID);
//     try {
//         const response = await fetch(`${dataURL}carrito`,{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(card)
//         });
//         if(!response.ok){
//             throw new Error("Error al insertar producto");
//         };
//         const carrito= await response.json();
//         if(carrito.items.has(newCardID)){
//             carrito.items.cantidad++;
//             return;
//         }  
//     } catch (error) {
//         console.error("Error",error);
//     }
// }
/**
 * @description: Filtrar Pokémon por habilidades
 */
export const filterByHabilidades = async (habilidades) => {
    const cartasMap = await getPokemons();
    const habilidadesSet = new Set(habilidades);
    const resultado = new Map();

    cartasMap.forEach((carta) => {
        let cartaHabilidades = carta.habilidades.map((h) => h.nombre);
        let tieneHabilidades = cartaHabilidades.some((hab) => habilidadesSet.has(hab));
        
        if (tieneHabilidades) resultado.set(carta.nombre, carta);
    });

    console.log("Pokémon filtrados por habilidades:", resultado);
    return resultado;
};

export const readCarrito = async()=>{
    try {
        try {
            const response = await fetch(`${dataURL}carrito`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error("Error al obtener itrms");
            }
            const carrito = await response.json();
            return carrito.items;
            
        } catch (error) {
            console.error("Error: ", error);
        }
    } catch (error) {
        console.log("Error",error);
    }
}


