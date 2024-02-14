// export const api = () => {
//     const titulo = document.createElement("p");
//     titulo.innerHTML = "API-KEY";
//     return titulo;
//   }
import { Footer } from "../components/Footer.js";
  export const api = () => {
    const container = document.createElement("div");
    const form = document.createElement("form");
    form.innerHTML = `
    <div>
    <label for="nameUser">USUARIO: </label>
    <input type="text id="nameUser placeholder="Usuario">
    </div>
    <div>
    <label for="api-key">CLAVE API: </label>
    <input type="text id="api-key placeholder="Api-key">
    <button type="button"> SAVE </button>
    </div>
    `;
    container.append(form, Footer());    
    return container;
  }