//Axios/Fetch son herramientas que nos permiten consumir APIs usando el protocolo HTTP
//Fetch es una herramienta propia de JavaScript
//Estamos importando la biblioteca de axios
// const axios = require('axios');
// import Axios from "axios"

// import axios from "axios"
//import { navigateTo } from "../router.js"


// export const getUsers = () => {
//   //Axios es una función que recibe un objeto
//   axios({
//     method: 'get',
//     url: 'https://reqres.in/api/users?page=2'
//   }).then(response => {
//     console.log(response)
//   })
// }

// export const getOneUser = async () => {
//   try {
//     const response = await axios({
//       method: 'get',
//       url: 'https://reqres.in/api/users/2'
//     })
//     console.log("Esta es nuestra respuesta", response)
//   } catch (error) {
//     console.log("Hubo un error")
//   }
// }

// // export const getUserError = async () => {
// //   try {
// //     const response = await axios.get("https://reqres.in/api/users/23") 
// //     console.log("🚀 ~ getUserError ~ response:", response)
    
// //   } catch (error) {
// //     navigateTo("/error")
// //     console.log("Error en tu página");    
// //   }
// // }   