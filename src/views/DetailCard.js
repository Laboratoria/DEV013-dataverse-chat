import { Header } from "../Components/Header.js";
import { TotalCards } from "../Components/TotalCards.js";
import { ButtonsContainer } from "../Components/ButtonsContainer.js";
import data from '../data/dataset.js';

export const DetailCard = (item) => {
  console.log("Valor de item", item);
  // esto contiene la vista completa de la tarjeta seleccionada
  const viewDetailCard = document.createElement('section');
  // Llamando al DOM que sera para el detalle de la tarjeta
  const detailCard = document.createElement("main");
  const card = document.createElement("div");

  card.innerHTML = `
  <div>
  <img src="${item.imageUrl}" alt="${item.name}">
  

  </div>
  `;

  // Agregando clases a las vistas 
  viewDetailCard.setAttribute("class","viewDetailCard");
  detailCard.setAttribute("class", "detailCard");
  card.setAttribute("class", "card");
 
  //realizamos el contenedor
  viewDetailCard.appendChild(Header());
  viewDetailCard.appendChild(detailCard);
  detailCard.appendChild(card);
  detailCard.appendChild(ButtonsContainer());

  // const totalCards = TotalCards.querySelector(".lista")

  // totalCards.addEventListener("click" ,function (event) {
  //   const imageKdrama = element.getAttribute(imageUrl);
  //   return imageKdrama
  // } )

 
  //agregando html a los dos botones 
  
  // console.log(viewDetailCard); 
  return viewDetailCard;
  
  
};