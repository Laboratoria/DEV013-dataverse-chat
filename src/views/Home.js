import data from "../data/dataset.js";
import { TotalCards } from "../Components/TotalCards.js";
import { filterData, sortData, computeStats } from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";
// aqui alojamos los valores de data
let totalData = [...data];

import { MenuSelect } from "./../Components/MenuSelect.js";
import { Footer } from "./../Components/Footer.js";
import { WelcomeText } from "./../Components/WelcomeText.js";
import { ModalApi } from "./../Components/ModalApi.js";
import { setApiKey, getApiKey } from "../lib/apiKey.js";
import { Header } from "../Components/Header.js";

export const Home = () => {
  const viewHome = document.createElement("section");
  viewHome.setAttribute("class", "view");

  const main = document.createElement("main");
  main.setAttribute("class", "main");
  //console.log(MenuSelect());
  main.appendChild(WelcomeText());
  main.appendChild(TotalCards(totalData));

  viewHome.appendChild(Header());
  viewHome.appendChild(MenuSelect());
  viewHome.appendChild(main);
  viewHome.appendChild(Footer());

  // este es para que el boton de apiKey muestre el modal
  const buttonApiKey = viewHome.querySelector(".button-appi-key");
  buttonApiKey.addEventListener("click", () => {
    if (getApiKey()) {
      // si ya hay un valor muestra ese alert
      alert("Ya ingresaste tu API key");
    }
    // si el valor de local storage es null o undefined muestra el modal
    else {
      main.appendChild(ModalApi());

      const formApiKey = viewHome.querySelector(".modal-key");
      const closeModal = viewHome.querySelector(".cancel-modal-footer-key");

      closeModal.addEventListener("click", () => {
        // remove es para cerrar el modal-key
        formApiKey.remove();
      });

      formApiKey.addEventListener("submit", (event) => {
        //para que no recargue la pagina
        event.preventDefault();

        const inputValue = viewHome.querySelector(".container-input").value;
        setApiKey(inputValue);
        formApiKey.remove();
      });
    }
  });

  // este es para el boton de chat grupal
  const buttonGroupChat = viewHome.querySelector(".button-group-chat");
  buttonGroupChat.addEventListener("click", () => {
    // si el valor de local storage es null o undefined muestra el modal
    if (!getApiKey()) {
      main.appendChild(ModalApi());

      const formApiKey = viewHome.querySelector(".modal-key");
      const closeModal = viewHome.querySelector(".cancel-modal-footer-key");

      closeModal.addEventListener("click", () => {
        // remove es para cerrar el modal-key
        formApiKey.remove();
      });

      formApiKey.addEventListener("submit", (event) => {
        //para que no recargue la pagina
        event.preventDefault();

        const inputValue = viewHome.querySelector(".container-input").value;
        setApiKey(inputValue);
        navigateTo("/groupchat");
      });
    } else {
      // si ya hay un valor muestra ese alert
      navigateTo("/groupchat");
    }
  });

  // filtrar por Genero
  const selectFilter = viewHome.querySelector("#Genre1");
  selectFilter.addEventListener("change", (event) => {
    // creamos la variable selectGenre que contiene el valor de los generos
    const selectGenre = event.target.value;
    //console.log(selectGenre);
    //llamo a la funcion de filtrar data
    const filterGenre = filterData(data, "totalGender", selectGenre);
    // aqui se almacena los generos filtrados en totalData
    totalData = [...filterGenre];
    //console.log(totalData);
    main.innerHTML = "";
    main.appendChild(TotalCards(totalData));
  });

  // ordenar de manera ascedente y descendente
  const selectOrder = viewHome.querySelector("#Order1");
  selectOrder.addEventListener("change", (event) => {
    // creamos la variable ordenSeleccionado que contiene el valor al hacer click (A-Z) (Z-A)
    //console.log(totalData);
    //console.log(selectOrder);
    const order = event.target.value;
    //console.log(order);
    if (order === "asc") {
      // Ordenar por nombre de manera ascendente
      const orderAsc = sortData(totalData, "name", "asc");
      totalData = [...orderAsc];
      //console.log(totalData);
      main.innerHTML = "";
      main.appendChild(TotalCards(totalData));
    } else {
      // Ordenar por nombre de manera descendente
      const orderDesc = sortData(totalData, "name", "desc");
      totalData = [...orderDesc];
      //console.log(totalData);
      main.innerHTML = "";
      main.appendChild(TotalCards(totalData));
    }
  });

  // //para el boton estadisticas
  const statsButton = viewHome.querySelector("#stats1");
  const modal = viewHome.querySelector(".content-modal");
  //console.log(statsButton);
  statsButton.addEventListener("click", function (event) {
    //console.log(statsButton);
    modal.style.display = "flex"; //se muestra la pantalla emergente
    // aqui alamacenamos la cantidad de kdramas, los resultados y el contenido de texto
    const totalKdramas = data.length;
    //console.log("totalkdramas", totalKdramas);
    const results = computeStats(data);
    //console.log("result:", results);
    const pageText = viewHome.querySelector("#page");
    //console.log("este es el page", pageText);
    if (event.currentTarget === statsButton) {
      //mostrar los porcentajes en el cuadro de dialogo
      pageText.innerHTML = "";
      pageText.innerHTML +=
        "El " +
        ((results["16 Episodios"] / totalKdramas) * 100).toFixed(2) +
        "% de k-dramas tiene 16 episodios" +
        "<br>";
      pageText.innerHTML +=
        "El " +
        ((results["20 Episodios"] / totalKdramas) * 100).toFixed(2) +
        "% de k-dramas tiene 20 episodios" +
        "<br>";
      pageText.innerHTML +=
        "El " +
        ((results["21 Episodios"] / totalKdramas) * 100).toFixed(2) +
        " % de k-dramas tiene 21 episodios" +
        "<br>";
      pageText.innerHTML +=
        "El " +
        ((results["24 Episodios"] / totalKdramas) * 100).toFixed(2) +
        " % de k-dramas tiene 24 episodios" +
        "<br>";
      pageText.innerHTML +=
        "El " +
        ((results["32 Episodios"] / totalKdramas) * 100).toFixed(2) +
        " % de k-dramas tiene 32 episodios" +
        "<br>";
    }
    //console.log("este es el page", pageText);
  });
  // para cerrar la ventana emergente
  const closeModal = viewHome.querySelector(".button-close");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // aqui limpiamos todos los filtros
  const clearFilter = viewHome.querySelector(".button-clear");
  //console.log("boton", clearFilter);
  clearFilter.addEventListener("click", function limpiar() {
    main.innerHTML = "";
    main.appendChild(TotalCards(data));
  });
  return viewHome;
};
