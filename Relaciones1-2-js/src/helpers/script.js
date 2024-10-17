/**
 * @description: Ejericicio 1  Suma de arrays
 * @param {ArrayNumber}
 * @param {ArrayNumber}
 * @returns {ArrayNumber}
 */
export const sumaArray = ((arr1,arr2)=>{
    if(arr1.length != arr2.length || !Array.isArray(arr1) || !Array.isArray(arr2) || !arr1.every(elemento => typeof elemento === 'number')||!arr2.every(elemento => typeof elemento === 'number')){
        console.log("Paramentros no correctos");
        return;
    }
    return arr1.map((n1,n2)=>{
        return  arr2[n2] + n1
    })
})

/**
 * @description: Ejercicio 2 Duplicados
 * @param {Array}
 * @param {Array}
 * @returns {Array}
 */

export const duplicadosArray = ((arr1,arr2)=>{
    if(!Array.isArray(arr1) || !Array.isArray(arr2) ){
        console.log("Paramentros no correctos");
        return;
    }
    return [...new Set([...arr1,...arr2])];
})

/**
 * @description: Ejercicio 3 filtrar pares
 * @param {ArrayNumber} arr1
 * @returns {ArrayNumber}
 */

export const paresArray = ((arr1)=>{
    if(!Array.isArray(arr1) ||!arr1.every(elemento => typeof elemento === 'number')){
        console.log("Paramentros no correctos");
        return;
    };
    return arr1.filter((number)=> number%2 == 0);
})

/**
 * @description: Ejercicio 4 union de arrays
 * @param {Arrays}
 * @returns {Array}
 */
export const concatenarArrays = ((...arrs)=>{
    return arrs.reduce((acc,arr)=>acc.concat(arr));
})

/**
 * @description: Ejercicio 5 Conteo de Palabras
 * @param {String}
 * @returns {Object}
 */
export const conteoPalabras = ((txt)=>{
    if(typeof txt !== 'string'){
        console.log("Error no has pasado un string");
        return;
    }
    const words = txt.split(" ");
    return words.length;
})

/**
 * @description: Ejercicio 6 Ordenar Numeros
 * @param {ArrayNumber}
 * @returns {ArrayNumber}
 */
export const ordenarNumeros = ((arr)=>{
    if(!Array.isArray(arr) ||!arr.every(elemento => typeof elemento === 'number')){
        console.log("Paramentros no correctos");
        return;
    }
    return arr.sort((a,b)=>a-b);
})

/**
 * @description: Ejercicio 7 : Eliminar elementos
 * @param {Array}
 * @param {Element}
 * @returns {Array}
 */
export const deleteFirst=((arr,elem)=>{
    if(!Array.isArray(arr)){
        console.log("Paramentros no correctos");
        return;
    }
    if (arr.indexOf(elem) !== -1) {
        arr.splice(arr.indexOf(elem), 1);
    }
    return arr;
      
})

/**
 * @description: Ejercicio 8 Maximo y minimo
 * @param {ArrayNumber}
 * @return {ArrayNumber}
 */

export const maximoMinimo=((arr)=>{
     if(!Array.isArray(arr) || !arr.every(elemento => typeof elemento === 'number')){
         console.log("Paramentros no correctos");
         return;
     }
     const max= arr.reduce((acc,number)=> number>acc ? acc=number : acc);
     const min= arr.reduce((acc,number)=> number<acc ? acc=number : acc);
     return [max,min];
     // return [Math.max(...arr), Math.min(...arr)];
})

/**
 * @description: Ejercicio 9 Buscar elemento
 * @param {Array}
 * @param {Element}
 * @returns {Number}
 */
export const IndexFirstElement=((arr,elem)=>{
    if(!Array.isArray(arr)){
        console.log("Paramentros no correctos");
        return;
    }
    return arr.indexOf(elem);
})

/**
 * @description: Ejercicio 10 Dividir en fragmentos
 * @param {Array}arr
 * @param {Number}tamano
 */
export const splitFrags=((arr,tamano)=>{
    if(!Array.isArray(arr) || typeof tamano != 'number'){
        console.log("Paramentros no correctos");
        return;
    }
    return arr.reduce((acc,value,index) => {
        if(index % tamano === 0) acc.push([]);
        acc[acc.length - 1].push(value);
        return acc;
    }, []);
})

/**
 * @description: Ejercicio 11 Mapear Numeros
 * @param {Array}
 * @param {Function}
 * @returns {Array}
 */

export const mapNumbers=((arr,func)=>{
    if(!Array.isArray(arr)){
        console.log("Paramentros no correctos");
        return;
    }
    return arr.map(func);
})

/**
 * @description: Ejercicio 12 combinar objetos
 * @param {Object}
 * @param {Object}
 * @returns {Object}
 */

export const combineObjects = (obj1, obj2) => { return { ...obj1, ...obj2 };};

/**
 * @description: Ejercicio 13 Extraer propiedades
 * @param {Array}
 * @param {Object}
 * @return {Object}
 */
export const extraerPropiedades =((obj,propiedades)=>{
    const nuevoObjeto = {};
  propiedades.forEach(propiedad => {
    if (obj.hasOwnProperty(propiedad)) {
      nuevoObjeto[propiedad] = obj[propiedad];
    }
  });

  return nuevoObjeto;
})