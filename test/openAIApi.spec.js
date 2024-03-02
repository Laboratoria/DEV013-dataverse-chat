// test/openAIApi.spec.js
//import * as axios from "axios";
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
/*global axios*/

import { communicateWithOpenAI } from './../src/lib/openAIApi.js';
//const axios = require("axios");
//jest.fn(axios);
jest.mock("axios");
// const mock = new MockAdapter(axios);

// axios.get.mockResolvedValue("Este es el mensaje del usuario");
//const messageSystem = "Este es un mensaje del usuario";

describe('communicateWithOpenAI', () => {
  test('Debería devolvernos ', async () => {
    axios.get.mockResolvedValue("Este es un mensaje del sistema");
    const result = await communicateWithOpenAI();
    expect(result).toMatch("Este es un mensaje del sistema");
  });
});
// test('Debería devolvernos error cuando algo esta mal dentro del código', async () => {
//   expect(await communicateWithOpenAI(messageSystem, messageUser)).toBe("error");
// })
// });
//mock
//communicateWithOpenAI (systemMessages, userMessages)
//systemMessages (CONTENIDO DE LOS MENSAJES DEL SISTEMA)
//userMessages (CONTENIDO DE NUESTROS MENSAJES)


// export const getUserError = async () => {
//   try {
//     const response = await axios.get("https://reqres.in/api/users/23")
//   } catch (error) {
//     navigateTo("/error")
//     console.log("Error en tu página");
//   }
// }


// describe('communicateWithOpenAI', () => {
//   test('Debería devolvernos repuestas a preguntas llevando un orden de ejecución', () => {
//     return communicateWithOpenAI().then(data => {
//       expect(data).toBe('');
//     });
//   });
//   test('Debería devolvernos error cuando algo esta mal dentro del código', async () => {
//     try {

//     } catch (error) {

//     }
//     expect().toBe('example');
//   });
// });