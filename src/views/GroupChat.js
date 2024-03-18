import { Header } from "./../Components/Header.js";
import { ListGroupChat } from "../Components/ListGroupChat.js";
import { ButtonReturnHome } from "../Components/ButtonReturnHome.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import data from "../data/dataset.js";
// aqui alojamos una copia de los valores de la data
const newData = [...data];

export const GroupChat = () => {
  //console.log('data', newData);
  // esto contiene la vista completa de la vista
  const viewGroupChat = document.createElement("section");
  // llamando al DOM para el detalle de los kdramas
  const containerChat = document.createElement("div");
  const listGroupChat = document.createElement("div");
  const groupChat = document.createElement("div");
  // agregando clases a los elementos DOM
  viewGroupChat.setAttribute("class", "view-group-chat");
  containerChat.setAttribute("class", "container-chat");
  listGroupChat.setAttribute("class", "list-group-chat");
  groupChat.setAttribute("class", "group-chat");

  groupChat.innerHTML = `
<div> 
  <div class="chat-group-content">
    <p class="text-group-chat">Chat Grupal</p>
  </div>

  <div class="box-response-total" >
      
  </div>
    
  <div class="input-chat group"> 
    <input type="text" id="input-user" placeholder="Interactua con el chat aqui">
    <input type="submit" value="Enviar" id="button-submit">
  </div>
</div>
  `;

  listGroupChat.append(ListGroupChat(), ButtonReturnHome());
  containerChat.append(listGroupChat, groupChat);
  viewGroupChat.append(Header(), containerChat);

  const userInput = groupChat.querySelector("#input-user");
  const buttonSubmit = groupChat.querySelector("#button-submit");
  const responseTotal = groupChat.querySelector(".box-response-total");

  // para cuando envie el mensaje y el chat grupal responda
  buttonSubmit.addEventListener("click", () => {
    //console.log("boton submit")

    responseTotal.innerHTML += ` 
      <div class="box-response-user">
        ${userInput.value}
      </div>
    `;

    newData.forEach((item) => {
      //console.log("item name", item)
      communicateWithOpenAI(userInput.value, item)
        // esta promesa me muestra la respuesta del consumo de mi API
        // .json me devuelve un objeto
        .then((res) => res.json())
        // consumir la promesa
        .then((data) => {
          //console.log(data.choices[0].message.content);
          responseTotal.innerHTML += `
          <div class="box-response-chat">
            ${data.choices[0].message.content}
          </div>
        `;
        });
    });
    // Limpiando el input
    userInput.value = "";
    return responseTotal;
  });
  return viewGroupChat;
};
