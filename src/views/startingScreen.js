//pantalla
import { navigateTo } from '../router.js';
export const StartingScreen = () => {
  const container = document.createElement("div");
  container.classList = "container__imageStart"
  container.innerHTML = `
  <div class="container__title"> 
  <img src="../images/Logo.png" alt="logo" class="logo"/>
  <h1 class="titleStart">WIKINOOK</h1>
  </div>
  <img src="../images/Imagen-pantalla-bienvenida.png" alt="imagen-inicio"/>
  <div class="container__start">
  <button class="btn-start">INICIO</button>
  </div>
  <div>
      <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none"><!--Eje x 0-700, Eje y -20-110, w100% del contenedor  preserveAspectRatio que el contenido se estire sin matener su prorporción-->
        <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#d0ccbd"/>
      </svg>
  </div>
  `;
  //container.querySelector(".btn-clear-search").addEventListener("click", () => {console.log("hola")});
  container.querySelector(".btn-start").addEventListener("click", () => navigateTo("/home", { }));
  return container;
};
