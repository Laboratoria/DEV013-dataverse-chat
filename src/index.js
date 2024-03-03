import { Home } from "./views/Home.js";
import { StartingScreen } from "./views/StartingScreen.js";
import { GroupalChat } from "./views/GroupalChat.js";
import { IndividualChat } from "./views/IndividualChat.js";
import { Stats } from "./views/Stats.js";
import { Api } from "./views/Api.js";
import { Error } from "./views/Error.js";
import { onURLChange, setRootEl, setRoutes } from "./router.js";
// import {communicateWithOpenAI} from "./lib/openAIApi.js";
// import { getUsers, getOneUser } from "./lib/testApi.js";

const routes = {
  "/": StartingScreen,
  "/home": Home,
  "/groupal": GroupalChat,
  "/individual": IndividualChat,
  "/api": Api,
  "/error": Error,
  "/stats": Stats
};


// data.forEach(element => {
//     routes[(`/individual-${element.name}`).toLowerCase()] = IndividualChat;
// });

const root = document.getElementById("root");
setRoutes(routes);
setRootEl(root);

document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);
  // communicateWithOpenAI();
  // getUsers()
  // getOneUser()
  // getUserError()
});

window.addEventListener("popstate", (event) => {
  onURLChange(event.target.location.pathname);
});

//const axios = require('axios');//referencia a la biblioteca de axios

// let dataOpenAi = JSON.stringify(
//   {role: "assistant",

// });


//https://api.openai.com/v1/chat/completions

// -H "Authorization: Bearer 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 \
// -H "OpenAI-Organization: org-XOneVeSuuHzIh2SaHYxTp3qZ"
// -d '{
//   "model": "gpt-3.5-turbo",
//   "messages": [{"role": "user", "content": "Say this is a test!"}],
//   "temperature": 0.7
// }'

//encabezado url, carga útil, si fue exitoso(respuesta), si da error interpretar system
//llava temperatura, message, content(promp), system, user, 
/*
  role": "assistant"
  "role": "assistant",
  "content": "\n\nHello there, how may I assist you today?",(input.value)      messages: [{ role: "system", content: "You are a helpful assistant." }],
       */
//token (250)

/*
async function promises {
  const = await
}
*/