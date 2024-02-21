import { Cards } from "./Cards.js";
import data from "../data/dataset.js";
import { sortData } from "../lib/dataFunctions.js";

export const SectionHome = () => {
  const section = document.createElement("section");
  section.innerHTML = `
    <div class="container">
      <div class="buscador">
          <h2>Lista de vecinos</h2>
          <div>
            <label for="sort">Ordenar por:</label>
            <select name="sort" id="sort" data-testid="select-sort">
              <option value="all">Elige una opción</option>
              <option value="asc">Ordenar de la A-Z</option>
              <option value="desc">Ordenar de la Z-A</option>
            </select>
            <input type="text" id="searchAnimal" placeholder="Buscar vecino"/>
            <button class="btn-clear-search" data-testid="button-clearName">Limpiar</button>
          </div>
      </div>
      <div id="content"></div>
    </div>
    `;
  // section.querySelector("#content").append(Cards(data));

  section.querySelector("#content").append(Cards(data));
  const ordenar = section.querySelector('[data-testid="select-sort"]');
  //ordenar.addEventListener("change", ()=> {console.log("ordenado")});

  ordenar.addEventListener("change", (event) => {
    section.querySelector("#content").innerHTML = "";
    const sortedData = sortData(data, "name", event.target.value);
    section.querySelector("#content").append(Cards(sortedData));
  });
  return section;
};

// Botón de modal del home eliminado
/* <div>
<button class="btn-statics" id="openModal">
  <ion-icon name="stats-chart-outline"></ion-icon>
</button>
</div> */
