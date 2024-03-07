import { Header } from './../Components/Header.js';
import { navigateTo } from '../router.js';
import { ListGroupChat } from '../Components/ListGroupChat.js';
import { ButtonReturnHome } from '../Components/ButtonReturnHome.js';
//import { data } from '../data/dataset.js';

export const GroupChat = (item) => {
//console.log('item', item);
// esto contiene la vista completa de la vista  
const viewGroupChat = document.createElement('section');
// llamando al DOM para el detalle de los kdramas conectados
const containerChat = document.createElement('div');
const listGroupChat = document.createElement('div');
const groupChat = document.createElement('div');
// lamando por clases 
viewGroupChat.setAttribute('class', 'view-group-chat');
containerChat.setAttribute('class', 'container-chat');
listGroupChat.setAttribute('class', 'list-group-chat');
groupChat.setAttribute('class', 'group-chat');

groupChat.innerHTML = ` 
  <div class="input-chat"> 
  <div class="chat-group-content">
    <p class="text-group-chat">Chat Grupal</>
  </div>
  <div class="input-chat group"> 
    <input type="text" id="input-user" placeholder="Interactua con el chat aqui">
    <input type="submit" value="Enviar">
  </div>
  `;

  listGroupChat.append(ListGroupChat(), ButtonReturnHome());
  containerChat.append(listGroupChat, groupChat);
  viewGroupChat.append(Header(), containerChat);
  return viewGroupChat;
}

