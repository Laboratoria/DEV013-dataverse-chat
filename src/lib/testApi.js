// /* global axios */

const axios = require("axios");
const api_key = "";

export const fakeCommunicateWithOpenAI = async (systemMessages, userMessages) => {
  try {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", [
      {
        messages: [
          {
            role: "system",
            content: `Eres un vecino de animal crossing, ${systemMessages} Manten tus respuestas cortas`,
          },
          {
            role: "user",
            content: userMessages,
          },
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.7,
      },
      {
        headers: { Authorization: "Bearer " + api_key },
      },
    ]);
    console.log(response.data, "response fake");
    return response.data.choices[0].message.content;
  } catch (error) {
    console.log(error, "error fake");
    return "error";
  }
};

////axios.post(url[, data[, config]])

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
//     method: "get",
//     url: "https://reqres.in/api/users?page=2",
//   }).then((response) => {
//     console.log(response);
//   });
// };

// export const getOneUser = async () => {
//   try {
//     const response = await axios({
//       method: "get",
//       url: "https://reqres.in/api/users/2",
//     });
//     console.log("Esta es nuestra respuesta", response);
//   } catch (error) {
//     console.log("Hubo un error");
//   }
// };

// export const getUserError = async () => {
//   try {
//     const response = await axios.get("https://reqres.in/api/users/23")
//     console.log("🚀 ~ getUserError ~ response:", response)

//   } catch (error) {
//     navigateTo("/error")
//     console.log("Error en tu página");
//   }
// }
