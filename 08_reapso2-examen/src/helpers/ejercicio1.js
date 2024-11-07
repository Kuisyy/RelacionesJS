/**
 * 
 * @param {String} dataURL 
 */
export const fetchUserData = async (dataURL) => {
  try {
    const response = await fetch(dataURL);

    if(!response.ok){
        throw new Error("No se ha podido cargar la data");
    }

    const users = await response.json();

    localStorage.setItem("Usuarios",JSON.stringify(users));
  } catch (error) {
    console.log("Error: ",error);
  }

}