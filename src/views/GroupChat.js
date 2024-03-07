import { Header } from './../Components/Header.js';
import { navigateTo } from '../router.js';
import { ListGroupChat } from '../Components/ListGroupChat.js';
import { ButtonReturnHome } from '../Components/ButtonReturnHome.js';

export function GroupChat () {
const viewGroupChat = document.createElement('section');
const listGroupChat = document.createElement('div');
const groupChat = document.createElement('div');

viewGroupChat.setAttribute('class', 'view-group-chat');
listGroupChat.setAttribute('class', 'list-group-chat');
groupChat.setAttribute('class', 'group-chat');

groupChat.innerHTML = ` 
  <div class="input-chat"> 
    <input type="text" id="input-user" placeholder="Interactua con el chat aqui">
    <input type="submit" value="Enviar">
  </div>
  `;

  listGroupChat.appendChild(ListGroupChat());
  listGroupChat.appendChild(ButtonReturnHome());  
  
  viewGroupChat.appendChild(Header());
  viewGroupChat.appendChild(listGroupChat);
  viewGroupChat.appendChild(groupChat);

  // para el boton volver al inicio 
  const buttonReturnHome = viewGroupChat.querySelector(".button-return-home");
  buttonReturnHome.addEventListener("click", () => {
    navigateTo("/", {})
  })

  return viewGroupChat;
}

// lo borre para hacer pruebas
/* <div class="chat">
    <div class="chat-name">
    <img src="${item.imageUrl}" alt="${item.name}">
    <h3> ${item.name} </h3>
    </div>
  </div> */
