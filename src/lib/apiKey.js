export const getApiKey = () => {
  //OBTENER LA LLAVE
  // const myStorage = window.localStorage;
  const getStorage = localStorage.getItem("llave");
  console.log("🚀 ~ getApiKey ~ getStorage:", getStorage);
};

export const setApiKey = (apiKey) => {
  //PARA GUARDAR LA API
  localStorage.setItem("llave", apiKey);
};

/*
localStorage.setItem("perro", "12355");
var cat = localStorage.getItem("API-KEY");
console.log(cat);*/
//localStorage.removeItem(apiKeyInput.value);

/*
setItem(clave, valor) – almacenar un par clave/valor.
getItem(clave) – obtener el valor por medio de la clave.
removeItem(clave) – eliminar la clave y su valor.
clear() – borrar todo.
key(índice) – obtener la clave de una posición dada.
length – el número de ítems almacenados.

Es compartido entre todas las pestañas y ventanas del mismo origen.
Los datos no expiran. Persisten a los reinicios de navegador y hasta del sistema operativo.
*/
