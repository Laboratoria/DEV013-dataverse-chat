import { Header } from "../Components/Header.js";


export function IndividualChat(item) {
  const viewIndividualChat = document.createElement('section');
  const individualChat = document.createElement('div')
  
  viewIndividualChat.setAttribute("class","view-indivdual-chat");
  individualChat.setAttribute("class","view-indivdual-chat");

  individualChat.innerHTML= `
  <div class="info">
    <div class="info-button-left">
      <button>
        <img src="images/flechaizquierda.png">
      </button>
    </div>
    <div class="info-name">
    <img src="${item.imageUrl}" alt="${item.name}">
    <h3> ${item.name} </h3>
    </div>
    <div class="info-button-rigth">
      <button>
        <img src="images/flechacerrar.png">
      </button>  
    </div>
  </div>
  <div class="chat"> 
  </div>

  `;
  viewIndividualChat.appendChild(Header());
  viewIndividualChat.appendChild(individualChat);
  return viewIndividualChat;
}