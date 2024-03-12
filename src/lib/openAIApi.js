// import OpenAI from "openai";
import { getApiKey } from "./apiKey.js";
const recieveApi = getApiKey();
console.log("apikey recibida", recieveApi);

export const communicateWithOpenAI = async (userInput, kDrama) => {
  //console.log("Funcion api ", kDrama, input);
  const url = "https://api.openai.com/v1/chat/completions";
  //Aquí es donde debes implementar la petición con fetch 
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${recieveApi}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Tu eres este kdrama  ${kDrama}, responde de manera corta o breve`,
        },
        {
          role: "user",
          content: `${userInput}`,
        },
      ],
    }),
  });
  
  // retorno del texto generado y enviando una respuesta al usuario
  return response;
};


