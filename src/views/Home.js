import data from '../data/dataset.js';
import { Cards } from '../Components/Card.js';
import { filterData, sortData, computeStats } from '../lib/dataFunctions.js';
let totalData = [...data]

import { Header } from './../Components/Header.js'
import { MenuSelect } from './../Components/MenuSelect.js'
import { Footer } from './../Components/Footer.js'

export const Home = () => {
  const viewHome = document.createElement("section");
  viewHome.setAttribute("class", "viewHome")
  //let currentData = [...data];
  const main = document.createElement("main")
  //console.log(MenuSelect());

  viewHome.appendChild(Header());
  viewHome.appendChild(MenuSelect());
  viewHome.appendChild(main)
  viewHome.appendChild(Footer());

  main.appendChild(Cards(totalData));

  const selectFilter = viewHome.querySelector("#Genero1")
  selectFilter.addEventListener("change", (event) => {
    // creamos la variable selectGenre que contiene el valor de los generos
    const selectGenre = event.target.value;
    //console.log(selectGenre);
    //llamo a la funcion de filtrar data
    const filterGenre = filterData(data, "totalGenero", selectGenre);
    // aqui se almacena los generos filtrados en totalData 
    totalData = [...filterGenre];
    //console.log(totalData);
    main.innerHTML = ""
    main.appendChild(Cards(totalData));
  });

  // // ordenar de manera ascedente y descendente
  const selectOrder = viewHome.querySelector("#Ordenar1");
  selectOrder.addEventListener("change", (event) => {
    // creamos la variable ordenSeleccionado que contiene el valor al hacer click (A-Z) (Z-A)
    //console.log(totalData);
    //console.log(selectOrder);
    const order = event.target.value;
    //console.log(order);
    if (order === "asc") {
      // Ordenar por nombre de manera ascendente
      const orderAsc = sortData(totalData, "name", "asc");
      totalData = [...orderAsc]
      //console.log(totalData);
      main.innerHTML = "";
      main.appendChild(Cards(totalData));
    } else {
      // Ordenar por nombre de manera descendente
      const orderDesc = sortData(totalData, "name", "desc");
      totalData = [...orderDesc]
      //console.log(totalData);
      main.innerHTML = "";
      // main.appendChild(MenuSelect());
      main.appendChild(Cards(totalData));
    }
  });

  // //para el boton estadisticas
  const statsButton = viewHome.querySelector("#Estadisticas1");
  statsButton.addEventListener('click', function (event) {
    statsButton.style.display = "flex"; //se muestra la pantalla emergente
    // aqui alamacenamos la cantidad de kdramas, los resultados y el contenido de texto
    const totalKdramas = data.length;
    const results = computeStats(data);
    const pageText = viewHome.querySelector("#page");
    //console.log(pageText);
    if (event.currentTarget === statsButton) {
      //mostrar los porcentajes en el cuadro de dialogo
      pageText.innerHTML = "";
      pageText.innerHTML += "El " + (results["16 Episodios"] / totalKdramas * 100).toFixed(2) + "% de k-dramas tiene 16 episodios" + "<br>";
      pageText.innerHTML += "El " + (results["20 Episodios"] / totalKdramas * 100).toFixed(2) + "% de k-dramas tiene 20 episodios" + "<br>";
      pageText.innerHTML += "El " + (results["21 Episodios"] / totalKdramas * 100).toFixed(2) + " % de k-dramas tiene 21 episodios" + "<br>";
      pageText.innerHTML += "El " + (results["24 Episodios"] / totalKdramas * 100).toFixed(2) + " % de k-dramas tiene 24 episodios" + "<br>";
      pageText.innerHTML += "El " + (results["32 Episodios"] / totalKdramas * 100).toFixed(2) + " % de k-dramas tiene 32 episodios" + "<br>";
      //pageText.log(resultados);
    }
  });

  // para cerrar la ventana emergente
  const closeModal = viewHome.querySelector("#close")
  closeModal.addEventListener("click", () => {
    closeModal.style.display = "none";
  });

  // // aqui limpiamos todos los filtros
  // limpiarFiltros.addEventListener("click", function limpiar() {
  //   rootElement.innerHTML = "";
  //   rootElement.appendChild(renderItems(data));
  // });


  return viewHome;

};