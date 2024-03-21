import { Header } from "./../Components/Header.js";
import { ListGroupChat } from "../Components/ListGroupChat.js";
import { ButtonReturnHome } from "../Components/ButtonReturnHome.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import { ModalApi } from "./../Components/ModalApi.js";
import { setApiKey, getApiKey } from "../lib/apiKey.js";
import data from "../data/dataset.js";

// aqui alojamos una copia de los valores de la data
const newData = [...data];

export const GroupChat = () => {
  //console.log('data', newData);
  // esto contiene la vista completa de la vista
  const viewGroupChat = document.createElement("section");
  // llamando al DOM para el detalle de los kdramas
  const containerChat = document.createElement("main");
  const listGroupChat = document.createElement("section");
  const groupChat = document.createElement("section");
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

   // este es para que el boton de apiKey muestre el modal
   const buttonApiKey = viewGroupChat.querySelector(".button-appi-key");
   buttonApiKey.addEventListener("click", () => {
     if (getApiKey()) {
       // si ya hay un valor muestra ese alert
       alert("Ya ingresaste tu API key");
     }
     // si el valor de local storage es null o undefined muestra el modal
     else {
      viewGroupChat.appendChild(ModalApi());
 
       const formApiKey = viewGroupChat.querySelector(".modal-key");
       const closeModal = viewGroupChat.querySelector(".cancel-modal-footer-key");
 
       closeModal.addEventListener("click", () => {
         // remove es para cerrar el modal-key
         formApiKey.remove();
       });
 
       formApiKey.addEventListener("submit", (event) => {
         //para que no recargue la pagina
         event.preventDefault();
 
         const inputValue = viewGroupChat.querySelector(".container-input").value;
         setApiKey(inputValue);
         formApiKey.remove();
       });
     }
   });


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
      communicateWithOpenAI(item, userInput.value)
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
