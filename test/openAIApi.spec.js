// test/openAIApi.spec.js
//import * as axios from "axios";
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';





// const axios = require("axios");
// const { communicateWithOpenAI } = require( './../src/lib/openAIApi.js');
// //jest.fn(axios);
// jest.mock("axios");
// // const mock = new MockAdapter(axios);

// // axios.get.mockResolvedValue("Este es el mensaje del usuario");
// //const messageSystem = "Este es un mensaje del usuario";

// describe('communicateWithOpenAI', () => {
//   test('Debería devolvernos ', async () => {
//     axios.get.mockResolvedValue("Este es un mensaje del sistema");
//     const result = await communicateWithOpenAI();
//     expect(result).toMatch("Este es un mensaje del sistema");
//   });
// });



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


import { communicateWithOpenAI } from "../src/lib/testApi.js"

const axios = require("axios");
jest.fn("axios");

describe('communicateWithOpenAI', () => {
  test('Debería devolvernos repuestas en un orden de ejecución', async () => {
    const user = {
      data: {
        choices: [{ //acceder a la posición 0 
          message:
          {
            content: "Hola, mucho gusto",
            role: "assistant",
          }
        },
        ]
      }
    }
    const resp = { id: "", data: user, }
    axios.post.mockResolvedValue(resp);
    const functionPost = await communicateWithOpenAI();

    expect(functionPost).toBe("Hola, mucho gusto")
  })
})

/*
{data: {…}, status: 200, statusText: '', headers: r, config: {…}, …}
config
: 
{transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
data
: 
{id: 'chatcmpl-8yDUsvfiayzd7e1cGBjIfJ795VBEP', object: 'chat.completion', created: 1709362254, model: 'gpt-3.5-turbo-0125', choices: Array(1), …}
headers
: 
r {cache-control: 'no-cache, must-revalidate', content-type: 'application/json'}
request
: 
XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
status
: 
200
statusText
: 
""
[[Prototype]]
: 
Object
*/

/*

{id: "chatcmpl-8yDBEewMIRAxkclZjTbTdLHNIhSkM", object: "chat.completion", created: 1709361036,…}
choices
: 
[{index: 0, message: {role: "assistant", content: "¡Yip yip! ¡Hola! ¿En qué puedo ayudarte hoy?"},…}]
0
: 
{index: 0, message: {role: "assistant", content: "¡Yip yip! ¡Hola! ¿En qué puedo ayudarte hoy?"},…}
finish_reason
: 
"stop"
index
: 
0
logprobs
: 
null
message
: 
{role: "assistant", content: "¡Yip yip! ¡Hola! ¿En qué puedo ayudarte hoy?"}
content
: 
"¡Yip yip! ¡Hola! ¿En qué puedo ayudarte hoy?"
*/