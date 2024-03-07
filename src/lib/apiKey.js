
export const getApiKey = () => {
    // Implementa el código para obtener la API KEY desde Local Storage
    const myApiKey = localStorage.getItem("myApiKey");
    return myApiKey;
 };
 
 export const setApiKey = (key) => {
   // Implementa el código para guardar la API KEY en Local Storage
   localStorage.setItem("myApiKey", key);
 };