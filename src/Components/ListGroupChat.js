//import data from '../data/dataset.js';

export function ListGroupChat(data) {
    const viewGroupChat = document.createElement("section");    
    viewGroupChat.setAttribute("class", "view-Group-Chat");
    const container = document.createElement('ul');
    // Iteraremos sobre cada objeto en el dataset
    data.forEach(item => {
      // Creamos un objeto contenedor para cada item (tarjeta)
      const itemContainer = document.createElement('li');
      const imageUrl = document.createElement('img');
      const nameKdrama = document.createElement('h3');
  
      itemContainer.setAttribute('itemscope', '');
      itemContainer.setAttribute('itemprop', 'order');
      itemContainer.setAttribute('itemtype', 'kdramas');
      itemContainer.setAttribute('class', 'list');
      imageUrl.src = item.imageUrl;
      nameKdrama.setAttribute('itemprop', 'name');
  
      nameKdrama.innerHTML = item.name;
      itemContainer.append(imageUrl, nameKdrama);
      container.appendChild(itemContainer);
      console.log("este es el container", container)
      return container;
    });
}