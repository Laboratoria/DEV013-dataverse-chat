import { Header } from "../Components/Header.js";
import { Card } from "../Components/Card.js";

export const DetailCard = (props) => {
  console.log(props);
  // esto contiene la vista completa de la tarjeta seleccionada
  const viewDetailCard = document.createElement('section');
  // Llamando al DOM que sera para el detalle de la tarjeta
  const detailCard = document.createElement("main");
  const card = document.createElement("div");
  const buttonsContainer = document.createElement("div");
  // Agregando clases
  viewDetailCard.setAttribute("class","viewDetailCard");
  detailCard.setAttribute("class", "detailCard");
  card.setAttribute("class", "card");
  buttonsContainer.setAttribute("class", "buttonsContainer");

  //agregando html a los dos botones 
  buttonsContainer.innerHTML=`
  <button class="button-principal">
    <img src="src/images/home.png" class="logo-home">
    Pagina principal
  </button>
  <button class="button-chat">
  <img src="src/images/chat.png" class="logo-chat-single">
  Chatear
  </button>
  `;
  return buttonsContainer;
  
  //realizamos el contenedor
  viewDetailCard.appendChild(Header());
  viewDetailCard.appendChild(DetailCard);
  detailCard.appendChild(card);
  detailCard.appendChild(buttonsContainer);

  
  // detailCard.innerText = `
  //   <div>
  //       <img src="" class="">
  //       <h3> Hola </h3>


  //   </div>
  // `;
  return detailCard;
}