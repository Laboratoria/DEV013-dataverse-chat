//import { GroupIconButton } from "../components/GroupIconButton.js";
import { data } from "../data/data.js";

export const Cards = () => {
  const cardsContainer = document.createElement("ul");
  console.log(cardsContainer);
  console.log(data);
  
  data.forEach((element) => {
    const cardItem = document.createElement("li");
    console.log(cardItem);
    cardItem.innerHTML = `
  <li class="card-container ${element.categoryPlant}" itemscope itemtype="https://schema.org">
    <article id="front-card" class="front-card">
      <h2>${element.name}</h2>
      <h3>${element.scientificName}</h3>
      <h4>${element.categoryPlant}</h4>
      <div class="top-card">
        <img alt="Plant Name" src="${element.imageUrl}">
        <dl itemscope itemtype="https://schema.org" class="facts">
          <div class="amounts">
            <dt itemprop="water-amount" class="amount">Agua</dt>
              <dd>
                <img alt="Gota" src="../Resources/DV Chat/Agua activa.png" >
                <img alt="Gota" src="../Resources/DV Chat/Agua activa.png" >
                <img alt="Gota" class="inactiva" src="../Resources/DV Chat/Agua activa.png" >
              </dd>
          </div>
          <div class="amounts">
            <dt itemprop="light-amount" class="amount">Luz</dt>
              <dd>
                <img alt="Sol" src="../Resources/DV Chat/Luz activa.png" >
                <img alt="Sol" class="inactiva"  src="../Resources/DV Chat/Luz activa.png" >
                <img alt="Sol" class="inactiva"  src="../Resources/DV Chat/Luz activa.png">
              </dd>
          </div>
          <div class="amounts">
            <dt itemprop="care-amount" class="amount">Cuidado</dt>
              <dd>
                <img alt="Semaforo" src="../Resources/DV Chat/Cuidado activa.png" >
                <img alt="Semaforo" class="inactiva"  src="../Resources/DV Chat/Cuidado activa.png" >
                <img alt="Semaforo" class="inactiva"  src="../Resources/DV Chat/Cuidado activa.png" >
              </dd>
          </div>
        </dl>
      </div>
      <div class="button-container">
        <button id="detalles" class="detalles">CHATEAR</button>
        <img src="" alt="Chat Individual"/>
      </div>
    </article>`;
    cardsContainer.appendChild(cardItem);
  });

  return cardsContainer;
};
