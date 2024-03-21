import { Header } from "../Components/Header.js";
import { navigateTo } from "../router.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import { ModalApi } from "./../Components/ModalApi.js";
import { setApiKey, getApiKey } from "../lib/apiKey.js";

export const IndividualChat = (item) => {
  //console.log("Valor de item", item);
  // esto contiene la vista completa de la tarjeta seleccionada
  const viewDetailCard = document.createElement("section");
  // Llamando al DOM que sera para el detalle de la tarjeta
  const detailCard = document.createElement("main");
  const card = document.createElement("div");
  
  // Agregando clases a las etiquetas
  viewDetailCard.setAttribute("class", "viewDetailCard");
  detailCard.setAttribute("class", "detailCard");
  card.setAttribute("class", "card");

  card.innerHTML = `
  <section class = "detail-card-total">
    <aside class="detail-card-top">
      <img src="${item.imageUrl}" alt="${item.name}" class= "image-kdrama-card">
      <h3 class= "name-kdrama-card"> ${item.name} </h3>
      <p class= "description-Total-card" > ${item.facts.totalEpisodes} Ep. | ${item.facts.totalGender} | Sub. ${item.facts.totalSubtitle} </p>
      <aside class="description-kdrama">
        <p class= "description"> <span class= "title-description"> Descripción: </span> <br> ${item.description}</p>
      </aside>
    </aside>
    
    <section class= "detail-card-bottom">
      <button class="button-return-home">
      <img src="images/home.png" class="logo-home">
      Página principal
      </button>
    </section>
  </section>
  
  <section class="chat">
    <section class="chat-name">
      <img src="${item.imageUrl}" alt="${item.name}" class="image-kdrama-chat">
      <aside class="chat-detail">
        <h3 class="name-kdrama-chat"> ${item.name} </h3>
        <p class="chat-on">Conectado</p>
      </aside>
    </section>
    <section class="box-response-total" >
      
    </section>
    <section class="input-chat"> 
      <input type="text" id="input-user" placeholder="Interactua con el chat aqui">
      <input type="submit" value="Enviar" id="button-submit">
    </section>
    
  </section>
 
  `;


  //realizamos el contenedor
  viewDetailCard.appendChild(Header());
  viewDetailCard.appendChild(detailCard);
  detailCard.appendChild(card);

  // para el boton volver al inicio
  const buttonReturnHome = viewDetailCard.querySelector(".button-return-home");
  buttonReturnHome.addEventListener("click", () => {
    navigateTo("/", {});
  });

  const userInput = card.querySelector("#input-user");
  const buttonSubmit = viewDetailCard.querySelector("#button-submit");
  const responseTotal = card.querySelector(".box-response-total");

  //ir al chat grupal
  const buttonGroupChat = viewDetailCard.querySelector(".button-group-chat");
  buttonGroupChat.addEventListener("click", () => {
    // si el valor de local storage es null o undefined muestra el modal
    if (!getApiKey()) {
      main.appendChild(ModalApi());

      const formApiKey = viewDetailCard.querySelector(".modal-key");
      const closeModal = viewDetailCard.querySelector(".cancel-modal-footer-key");

      closeModal.addEventListener("click", () => {
        // remove es para cerrar el modal-key
        formApiKey.remove();
      });

      formApiKey.addEventListener("submit", (event) => {
        //para que no recargue la pagina
        event.preventDefault();

        const inputValue = viewDetailCard.querySelector(".container-input").value;
        setApiKey(inputValue);
        navigateTo("/groupchat");
      });
    } else {
      // si ya hay un valor muestra ese alert
      navigateTo("/groupchat");
    }
  });

   // este es para que el boton de apiKey muestre el modal
   const buttonApiKey = viewDetailCard.querySelector(".button-appi-key");
   buttonApiKey.addEventListener("click", () => {
     if (getApiKey()) {
       // si ya hay un valor muestra ese alert
       alert("Ya ingresaste tu API key");
     }
     // si el valor de local storage es null o undefined muestra el modal
     else {
      viewDetailCard.appendChild(ModalApi());
 
       const formApiKey = viewDetailCard.querySelector(".modal-key");
       const closeModal = viewDetailCard.querySelector(".cancel-modal-footer-key");
 
       closeModal.addEventListener("click", () => {
         // remove es para cerrar el modal-key
         formApiKey.remove();
       });
 
       formApiKey.addEventListener("submit", (event) => {
         //para que no recargue la pagina
         event.preventDefault();
 
         const inputValue = viewDetailCard.querySelector(".container-input").value;
         setApiKey(inputValue);
         formApiKey.remove();
       });
     }
   });


  // para cuando envie el mensaje y el chat responda
  buttonSubmit.addEventListener("click", () => {
    //console.log("boton submit")
    //console.log("item name", item.name)
    communicateWithOpenAI(item.name, userInput.value )
      // esta promesa me muestra la respuesta del consumo de mi API
      // .json me devuelve un objeto
      .then((res) => res.json())
      // consumir la promesa
      .then((data) => {
        //console.log(data.choices[0].message.content);
        responseTotal.innerHTML += `
        <div class="box-response-user">
          ${userInput.value}
        </div>
        <div class="box-response-chat">
          ${data.choices[0].message.content}
        </div>
      `;
        
        // Limpiando el input
        userInput.value = "";
        return responseTotal;
        
      });
  });
  return viewDetailCard;
  
};
