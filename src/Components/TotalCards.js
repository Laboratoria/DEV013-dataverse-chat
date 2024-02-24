// import data from '../data/dataset.js';
import { navigateTo } from '../router.js';

export const TotalCards = (data) => {
  const container = document.createElement('ul');
  // Iteraremos sobre cada objeto en el dataset
  data.forEach(item => {
    // Creamos un objeto contenedor para cada item (tarjeta)
    const itemContainer = document.createElement('li');
    const imageUrl = document.createElement('img');
    const nameKdrama = document.createElement('h3');
    const descriptionTotal = document.createElement('p');

    itemContainer.setAttribute('itemscope', '');
    itemContainer.setAttribute('itemprop', 'order');
    itemContainer.setAttribute('itemtype', 'kdramas');
    itemContainer.setAttribute('class', 'list');
    imageUrl.src = item.imageUrl;
    nameKdrama.setAttribute('itemprop', 'name');
    descriptionTotal.setAttribute('class', 'description-Total')
    descriptionTotal.setAttribute('itemprop', 'descriptionTotal');

    nameKdrama.innerHTML = item.name;
    descriptionTotal.innerHTML = `${item.facts.totalEpisodes} Ep. | ${item.facts.totalGender} | Sub. ${item.facts.totalSubtitle}`;
    itemContainer.append(imageUrl, nameKdrama, descriptionTotal);
    container.appendChild(itemContainer);

    console.log(itemContainer);

    itemContainer.addEventListener("click", () => {
      //con item traemos todo los valores 
      navigateTo("/detailcard", {...item})
    })
    console.log("Este es el element", itemContainer);
  });
  console.log(container);
  return container;
};