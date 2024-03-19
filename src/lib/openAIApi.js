import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = async (kDrama, userInput) => {
  const recieveApi = getApiKey();
  //console.log("apikey recibida", recieveApi);
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
          content: `Tu eres ${kDrama}, responde de manera corta o breve`,
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
