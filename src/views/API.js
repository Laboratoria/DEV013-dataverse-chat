// export const api = () => {
//     const titulo = document.createElement("p");
//     titulo.innerHTML = "API-KEY";
//     return titulo;
//   }
import { Header } from "../components/Header.js"; 
import { Footer } from "../components/Footer.js";
import { navigateTo } from "../router.js";
import { ButtonHome } from "../components/Button.js";
  export const api = () => {
    const container = document.createElement("div");
    const apiPage = document.createElement("main");
    apiPage.className = "mainForm";
    apiPage.innerHTML = `
    <form>
    <div class="container__ApiUser">
    <label for="nameUser">USUARIO: </label>
    <input type="text id="nameUser" class="userName" placeholder="Usuario">
    </div>
    <div class="container__keyApi">
    <label for="api-key">CLAVE API: </label>
    <input type="text id="api-key" class="api__key" placeholder="Api-key">
    </div>
    <button type="button" class="buttonApi"> SAVE </button>
    </from>
    `;
    apiPage.querySelector(".buttonApi").addEventListener("click", () => {navigateTo("/chat Individual", {})})
    container.append(Header(), apiPage, ButtonHome(), Footer());
    console.log(container);    
    return container;
  }