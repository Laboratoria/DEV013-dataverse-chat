// test/openAIApi.spec.js
import { fakeCommunicateWithOpenAI } from "./../src/lib/testApi.js";
const axios = require("axios");
jest.mock("axios");

describe("communicateWithOpenAI", () => {
  test("Debería devolvernos una respuesta del API en string", async () => {
    const res = {
      index: 0,
      message: {
        role: "assistant",
        content: "Este es un mensaje del sistema",
      },
      "logprobs": null,
      "finish_reason": "stop"
    };
    axios.post.mockResolvedValue({data:{
      id: "chatcmpl-8yNGMTanQsypIJk8baRF1Jy8FRmjw",
      object: "chat.completion",
      created: 1709399794,
      model: "gpt-3.5-turbo-0125",
      choices: [res],
      "usage": {
        "prompt_tokens": 168,
        "completion_tokens": 17,
        "total_tokens": 185
      },
      "system_fingerprint": "fp_2b778c6b35"
    }});

    const result = await fakeCommunicateWithOpenAI();
    expect(result).toMatch("Este es un mensaje del sistema");
  });

  test("Debería devolvernos un error", async () => {
    const res = {
      index: 0,
      message: {
        role: "assistant",
        content:"",
      },
      "logprobs": null,
      "finish_reason": "stop"
    };
    axios.post.mockResolvedValue({data:{
      id: "chatcmpl-8yNGMTanQsypIJk8baRF1Jy8FRmjw",
      object: "chat.completion",
      created: 1709399794,
      model: "gpt-3.5-turbo-0125",
      choices: [res],
      "usage": {
        "prompt_tokens": 228,
        "completion_tokens": 57,
        "total_tokens": 185
      },
      "system_fingerprint": "fp_2b778c6b35"
    }});

    const result = await fakeCommunicateWithOpenAI();
    expect(result).not.toMatch("Este es un mensaje del sistema");
  });
  // test("Debería devolvernos un error", async () => {
  //   const res = {
  //     index: 0,
  //     message: {
  //       role: "assistant",
  //       content:"",
  //     },
  //     "logprobs": null,
  //     "finish_reason": "stop"
  //   };
  //   axios.post.mockResolvedValue({data:{
  //     id: "vecinos",
  //     object: "chat.completion",
  //     created: 3,
  //     model: "Barbara y Danilu",
  //     choices: [res],
  //     "usage": {
  //       "prompt_tokens": 8,
  //       "completion_tokens": 8,
  //       "total_tokens": 8
  //     },
  //     "system_fingerprint": "fp_2b778c6b35"
  //   }});

  //   await expect(fakeCommunicateWithOpenAI()).rejects.toMatch("error");
  // });
});

/*
{
  "id": "chatcmpl-8yNGMTanQsypIJk8baRF1Jy8FRmjw",
  "object": "chat.completion",
  "created": 1709399794,
  "model": "gpt-3.5-turbo-0125",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "¡Hola! ¿En qué puedo ayudarte hoy? ¡Buh-kay!"
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 168,
    "completion_tokens": 17,
    "total_tokens": 185
  },
  "system_fingerprint": "fp_2b778c6b35"
}
*/

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
