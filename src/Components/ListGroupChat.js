import data from '../data/dataset.js';

//console.log ('aqui data', data);
export function ListGroupChat() {
    const container = document.createElement('ul');
    container.setAttribute('class', 'ul-group');
    // Iteraremos sobre cada objeto en el dataset
    data.forEach(item => {
      //console.log('item',item);
      // Creamos un objeto contenedor para cada item (tarjeta)
      const itemContainer = document.createElement('li');
      const imageUrl = document.createElement('img');
      const nameKdrama = document.createElement('h3');
  
      itemContainer.setAttribute('itemscope', '');
      itemContainer.setAttribute('itemprop', 'order');
      itemContainer.setAttribute('itemtype', 'kdramas');
      itemContainer.setAttribute('class', 'list-group');
      imageUrl.src = item.imageUrl;
      imageUrl.setAttribute('class', 'image-kdrama-chat group')
      nameKdrama.setAttribute('itemprop', 'name');
      nameKdrama.setAttribute('class', 'name-kdrama-chat group')
  
      nameKdrama.innerHTML = item.name;
      itemContainer.append(imageUrl, nameKdrama);
      //console.log('itemcontainer', itemContainer);
      container.appendChild(itemContainer);
      //console.log("este es el container", container);
    });
    return container;
}