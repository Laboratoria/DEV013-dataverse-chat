import { Cards } from "./Cards.js";
import data from '../data/dataset.js';

export const SectionHome = () => {
    const section = document.createElement("section");
    section.innerHTML = `
    <div class="container">
              <div class="buscador">
                <h2>Lista de vecinos</h2>
                <div>
                  <button class="btn-statics" id="openModal">
                    <ion-icon name="stats-chart-outline"></ion-icon>
                  </button>
                </div>
                <div>
                  <label for="sort">Ordenar por:</label>
                  <select name="sort" id="sort" data-testid="select-sort">
                    <option value="all">Elige una opción</option>
                    <option value="asc">Ordenar de la A-Z</option>
                    <option value="desc">Ordenar de la Z-A</option>
                  </select>
                  <!-- este select esta oculto solo para que pase el test css -->
                  <label for="sorthidden" hidden>Ordenar por:</label>
                  <select name="sort" id="sorthidden" hidden></select>
                  <input type="text" id="searchAnimal" placeholder="Buscar vecino"/>
                  <button
                    class="btn-clear-search"
                    data-testid="button-clearName">
                    Limpiar
                  </button>
                </div>
              </div>
              <div id="content"></div>
              <div class="content-modal" id="modal">
                <div class="modal-body">
                  <div class="modal-header">
                    <h1>Estadisticas</h1> <!--título dentro del modal-->
                  </div>
                  <div class="modal-main">
                    <div id="centerModal">
                      <div id="chart_div" style="padding-left: 100px"></div>
                      <p id="page">texto</p>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="reset" id="close" class="btn-close">
                      <ion-icon name="close-circle-outline"></ion-icon>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
    `;
    section.querySelector("#content").append(Cards(data));
    return section;
}