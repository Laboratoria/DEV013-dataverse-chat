import { ModalApi } from "./../Components/ModalApi.js";
import { navigateTo } from "../router.js";
import { setApiKey, getApiKey } from "../lib/apiKey.js";

export const TotalCards = (data) => {
  //console.log("total cards data", data)
  const container = document.createElement("ul");
  container.setAttribute("class", "container-cards");
  // Iteraremos sobre cada objeto en el dataset
  data.forEach((item) => {
    // Creamos un objeto contenedor para cada item (tarjeta)
    const itemContainer = document.createElement("li");
    itemContainer.className = "cards";
    const imageUrl = document.createElement("img");
    const nameKdrama = document.createElement("h3");
    const descriptionTotal = document.createElement("p");

    itemContainer.setAttribute("itemscope", "");
    itemContainer.setAttribute("itemprop", "order");
    itemContainer.setAttribute("itemtype", "kdramas");
    itemContainer.setAttribute("class", "list");
    imageUrl.src = item.imageUrl;
    imageUrl.setAttribute("class", "image-card");
    nameKdrama.setAttribute("itemprop", "name");
    nameKdrama.setAttribute("class", "name-kdrama");
    descriptionTotal.setAttribute("class", "description-Total");
    descriptionTotal.setAttribute("itemprop", "descriptionTotal");

    nameKdrama.innerHTML = item.name;
    descriptionTotal.innerHTML = `${item.facts.totalEpisodes} Ep. | ${item.facts.totalGender} | Sub. ${item.facts.totalSubtitle}`;
    itemContainer.append(imageUrl, nameKdrama, descriptionTotal);
    container.appendChild(itemContainer);

    //este es para el boton de chat individual
    itemContainer.addEventListener("click", () => {
      // si el valor de local storage es null o undefined muestra el modal
      if (!getApiKey()) {
        container.appendChild(ModalApi());

        const formApiKey = container.querySelector(".modal-key");
        const closeModal = container.querySelector(".cancel-modal-footer-key");

        closeModal.addEventListener("click", () => {
          // remove es para cerrar el modal-key
          formApiKey.remove();
        });

        formApiKey.addEventListener("submit", (event) => {
          //para que no recargue la pagina
          event.preventDefault();

          const inputValue = container.querySelector(".container-input");
          //console.log("input Value :",inputValue);
          setApiKey(inputValue.value);
          //console.log("setApikey",setApiKey(inputValue.value));
          navigateTo(`/individualchat?id=${item.id}`, { ...item });
        });
      } else {
        // si ya hay un valor nos lleva a la vista de chat individual
        navigateTo(`/individualchat?id=${item.id}`, { ...item });
      }
    });
  });

  //console.log("container", container);
  return container;
};
