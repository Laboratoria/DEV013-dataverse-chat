/* Esta función debe recibir un parámetro que almacena los mensajes
deben seguir una estructura específica */
// import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = (messages) => {
  console.log(messages);
  // const requestPromise = new Promise((resolve, rejected)=> {});
  // console.log("🚀 ~ communicateWithOpenAI ~ requestPromise:", requestPromise)
  
};



// let procesoLento = new Promise((resolve, reject) => {
//   let datos = {};
//   //...
//   //muchas lineas de código
//   //...
//   if (error) {
//     //uh oh, las cosas no salieron tan bien
//     reject(new Error('Fallamos, lo siento'));
//   }
//   //...
//   resolve(datos);
// });


// let promises = new Promise((resolved, rejected) => {
//   let expression = true;
//   if(expression){
//       resolved("se resolvio correctamente");
//   }else {
//       rejected("se produjo un error");
//   }
// });
// //en then() dentro van 2 parámetros, funciones tipo flecha
// /*
// promises.then(
//   value => console.log(value),
//   error => console.error(error)
// )
// */

// //otra forma de ejecutarlo con catch()
// promises.then(
//   value => console.log(value))
//   .catch(error => console.error(error)
// )


// let promises2 = new Promise((resolved) => {
//   setTimeout(() => resolved('promise and setTimeout'), 4000);
// })

// async function prom() {
//   return "Promise and async";  
// }

// prom().then(value => console.log(value));