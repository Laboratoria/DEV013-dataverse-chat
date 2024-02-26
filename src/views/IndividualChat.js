import { Header } from "../Components/Header.js";
import { navigateTo } from '../router.js';

export const IndividualChat = (item) => {
  console.log("Valor de item", item);
  // esto contiene la vista completa de la tarjeta seleccionada
  const viewDetailCard = document.createElement('section');
  // Llamando al DOM que sera para el detalle de la tarjeta
  const detailCard = document.createElement("main");
  const card = document.createElement("div");

  card.innerHTML = `
  <div>
  <div>
  <img src="${item.imageUrl}" alt="${item.name}">
  <h3> ${item.name} </h3>
  <p class= "descriptionTotal" > ${item.facts.totalEpisodes} Ep. | ${item.facts.totalGender} | Sub. ${item.facts.totalSubtitle} </p>
  <p class= "description"> ${item.description}</p>
  </div>
  <div>
    <button class="button-return-home">
      <img src="images/home.png" class="logo-home">
      Página principal
    </button>
  </div>
  </div>
  
  <div class="chat">
    <div class="chat-name">
    <img src="${item.imageUrl}" alt="${item.name}">
    <h3> ${item.name} </h3>
    </div>
  </div>
  <div class="input-chat"> 
    <input type="text" id="input-user" placeholder="Interactua con el chat aqui">
    <input type="submit" value="Enviar">
  </div>
  `;

  // Agregando clases a las etiquetas
  viewDetailCard.setAttribute("class","viewDetailCard");
  detailCard.setAttribute("class", "detailCard");
  card.setAttribute("class", "card");
 
  //realizamos el contenedor
  viewDetailCard.appendChild(Header());
  viewDetailCard.appendChild(detailCard);
  detailCard.appendChild(card);
  
  // para el boton volver al inicio 
  const buttonReturnHome = viewDetailCard.querySelector(".button-return-home");
  buttonReturnHome.addEventListener("click", () => {
    navigateTo("/", {})
  })
  // console.log(viewDetailCard); 
  return viewDetailCard;
  
  
};