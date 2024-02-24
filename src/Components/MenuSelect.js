export const MenuSelect = () => {
  const selects = document.createElement("div");
  selects.setAttribute("id", "input");
  selects.innerHTML = `
    <div class= menu>
    <!--Seccion genero-->
    <div class="Genre-menu">
      <label for="Genre1">Genero: </label>
      <select id="Genre1" name="genre" data-testid="select-filter">
        <option value="a" selected disabled>seleccionar</option>
        <option value="Romance">Romance</option>
        <option value="Drama">Drama</option>
        <option value="Comedia">Comedia</option>
        <option value="Fantasía">Fantasía</option>
        <option value="Thriller">Thriller</option>
        <option value="Acción">Acción</option>
      </select>
    </div>
    <!--Seccion ordenar A-Z-->
    <div class="Order-menu">
      <label for="Order1">Ordenar: </label>
      <select id="Order1" name="ordenar" data-testid="select-sort">
        <option value="a" selected disabled>seleccionar</option>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>
    </div>
    <!--Seccion Estadisticas-->
    <div class="stats-menu">
      <label for="stats1">Estadística: </label>
      <button id="stats1">Número de episodios</button>
      <div class="content-modal" id="modal">
        <div class="modal-body">
          <div class="modal-header">
            <h3 id="texto-stats">Estadística <br /> por número de episodios</h3><br>
            <div class="modal-main">
              <img class="logo-kdrama" src="images/kpop.png"><br />
              <p id="page"> <br /></p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="reset" id="close" class="button-close">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--Boton Limpiar filtros-->
    <div class="Menu-clean">
      <button name="button-clear" data-testid="button-clean">
        <img class="logo-clean" src="images/filter.png" />
        Limpiar filtros</button>
    </div>
  
    </div>`
  return selects;
}
