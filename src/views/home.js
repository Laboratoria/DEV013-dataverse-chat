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
  

//   Codigo de Chris 
//   const contenedor = document.createElement("section");

//     contenedor.innerHTML = `
//       <h1>Titulo</h1>
//       <a id="individual">Chat Individual</a>
//       <a id="API">API</a>
//       <a id="grupal">Chat Grupal</a>
//       <a id="error">Error</a>
//     `
    
//     contenedor.querySelector('#individual').addEventListener("click", () => alert('GRUPAL'));
//     contenedor.querySelector('#API').addEventListener("click", () => alert('API'));
//     contenedor.querySelector('#grupal').addEventListener("click", () => alert('INDIVIDUAL') );
//     contenedor.querySelector('#error').addEventListener("click", () => alert('ERROR') );


// document.getElementById('root').appendChild(contenedor)