// import OpenAI from "openai";
import { getApiKey } from "./apiKey.js";
// const openai = new OpenAI();
const recieveApi = getApiKey();


export const communicateWithOpenAI = async (kDrama, input) => {
  console.log("Funcion api ",kDrama, input);
  //Aquí es donde debes implementar la petición con fetch 
  const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + recieveApi,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Tu eres este kdrama:  ${kDrama}, responde de manera corta o breve`,
        },
        {
          role: "user",
          content: input,
        },
      ],
    }),
  });
  return response;
};