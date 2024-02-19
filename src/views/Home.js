import data from '../data/dataset.js';
// import { filterData } from './../lib/dataFunctions.js';

import { Header } from './../Components/Header.js'
import { MenuSelect } from './../Components/MenuSelect.js'
import { Footer } from './../Components/Footer.js'

export const Home = () => {
  const header = document.createElement("section");
  header.setAttribute("class", "header")
  //let currentData = [...data];
  // const detailCardTotal = renderItems(data.container.itemContainer)
  // detailCardTotal.addEventListener("click", function () {
  //   console.log(detailCardTotal);
  // })

  header.appendChild(Header());
  header.appendChild(MenuSelect());
  header.appendChild(renderItems(data));
  header.appendChild(Footer());

  return header;
};

const renderItems = (data) => {
  const container = document.createElement('ul');
  // Iteraremos sobre cada objeto en el dataset
  data.forEach(item => {
    // Creamos un objeto contenedor para cada item (tarjeta)
    const itemContainer = document.createElement('li');
    const imageUrl = document.createElement('img');
    const nameKdrama = document.createElement('h3');
    const descriptionTotal = document.createElement('p');
    itemContainer.setAttribute('itemscope', '');
    itemContainer.setAttribute('itemprop', 'ordenar');
    itemContainer.setAttribute('itemtype', 'kdramas');
    itemContainer.setAttribute('class', 'lista');
    imageUrl.src = item.imageUrl;
    nameKdrama.setAttribute('itemprop', 'name');
    descriptionTotal.setAttribute('itemprop', 'descripcionTotal');
    nameKdrama.innerHTML = item.name;
    descriptionTotal.innerHTML = `${item.facts.cantidadEpisodios} Ep. | ${item.facts.totalGenero} | Sub. ${item.facts.totalSubtitulos}`;
    itemContainer.append(imageUrl, nameKdrama, descriptionTotal);
    container.appendChild(itemContainer);
  });
  // Devolver el contenedor principal con todos los elementos renderizados
  return container;
};


