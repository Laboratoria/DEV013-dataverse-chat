import { Header } from "../Components/Header.js";
import { ButtonsContainer } from "../Components/ButtonsContainer.js";

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
  <h3> ${item.name} </h3>
  <p class= "descriptionTotal" > ${item.facts.totalEpisodes} Ep. | ${item.facts.totalGender} | Sub. ${item.facts.totalSubtitle} </p>
  <p class= "description"> ${item.description}</p>
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
  
  // console.log(viewDetailCard); 
  return viewDetailCard;
  
  
};