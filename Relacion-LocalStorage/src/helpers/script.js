/**
 * @description: Relacion de Ejercicios de LocalStorage 
 * @author: Luis Maldonado Hernandez
*/

/**
 * @description: Ejercicio 1 Guardar y Recuperar array de objetos
 * @param {ArrayObject}
 * @return {ArrayObject} 
 */

export const setRecoveryArrayObjects=((arrayObject)=>{
    localStorage.setItem('arrayObjects', JSON.stringify(arrayObject));
    return JSON.parse(localStorage.getItem('arrayObjects'));

})

/**
 * @description: Ejercicio 2 Validar datos antes de guardar en LocalStorage
 * @param {ArrayObject}
 * @returns{Boolean}
*/
export const validateData=((arrObject)=>{
        arrObject.forEach((obj)=>{
           if( obj.nombre== "" || obj.edad < 0){
            return false;
           }
        })
    return true;
})

/**
 * @description: Ejercicio 3 Actualizar un objeto dentro del array en LocalStorage
 * @param {Object} edad
 * @param {Object} name
 * @return {Boolean}
 */

export const updateObject = ((edad,nombre)=>{
    const arrUsr = JSON.parse(localStorage.getItem("arrayObjects"))
    const findUser = arrUsr.find((usr)=> usr.Nombre==nombre);
    if (findUser){
        findUser.edad = edad;
        localStorage.setItem("arrayObjects", JSON.stringify(arrUsr));
        return true;
    }
    return false;
})
/**
 * @description: Ejercicio 4 delete objeto dentro del array en LocalStorage
 * @param {String} name
 * @return {Boolean}
 */

export const deleteUsr = ((usrName)=>{
    const arrUsr = JSON.parse(localStorage.getItem("arrayObjects"));
    const findUser = arrUsr.find((usr)=> usr.Nombre==usrName);
    if(findUser){
        const updatearrUsr = arrUsr.filter((usr)=>usr.Nombre!==usrName);
        localStorage.setItem("arrayObjects", JSON.stringify(updatearrUsr));
        return true;
    }
    return false;
})
/**
 * @description: Ejercicio 6 Guardar un Set en LocalStorage
 * @param {SetNum}
 * @returns {Set}
 */
export const setLocalStorage = ((setNum)=>{
    const arrNum = [...setNum];
    localStorage.setItem("setNum", JSON.stringify(arrNum));
    return new Set(JSON.parse(localStorage.getItem("setNum")));
})

/**
 * @description: Ejercicio 7 Guardar un Map en LocalStorage
 * @param {Map}
 * @returns {Map}
 */
export const setMap = ((map)=>{
    const arrObject = [...map];
    localStorage.setItem("map", JSON.stringify(arrObject));
    return new Map(JSON.parse(localStorage.getItem("map")));
})
