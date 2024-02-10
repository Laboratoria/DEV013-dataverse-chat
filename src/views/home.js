//PANTALLA PRINCIPAL
import { navigateTo } from '../router.js';

export const home = () => {
    const titulo = document.createElement("p");
    const linkIndividual = document.createElement("a");
    const linkAPI = document.createElement("a");
    const linkGrupal = document.createElement("a");
    const linkError = document.createElement("a");
    linkIndividual.innerText = "Chat Individual";
    linkAPI.innerText = "API";
    linkGrupal.innerText = "Chat Grupal";
    linkError.innerText =  "Error";
    titulo.innerHTML = `
    <h1>TITULO</h1>
    `  
    linkGrupal.addEventListener("click", () => navigateTo("/groupal", { }) );
    linkAPI.addEventListener("click", () => navigateTo("/api", { }) );
    linkIndividual.addEventListener("click", () => navigateTo("/individual", { }) );
    linkError.addEventListener("click", () => navigateTo("/error", { }) );
    titulo.appendChild(linkAPI);
    titulo.appendChild(linkError);
    titulo.appendChild(linkGrupal);
    titulo.appendChild(linkIndividual);

    return titulo;
  }
  