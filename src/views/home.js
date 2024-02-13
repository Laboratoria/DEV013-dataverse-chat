//PANTALLA PRINCIPAL
import { navigateTo } from '../router.js';
/*
export const home = () => {
  const root = document.querySelector("#root");
  const container = document.createElement("div");
  container.innerHTML = `
  <h1> TITULO </h1>
  <a id="starting">Inicio</a> <br/>
  <a id="groupal">Chat Grupal</a> <br/>
  <a id="individual">Chat Individual</a> <br/>
  <a id="API">API</a> <br/>
  <a id="error">Error</a> <br/>
  `;
  container.querySelector("#API").addEventListener("click", () => navigateTo("/api", { }));
  container.querySelector("#starting").addEventListener("click", () => navigateTo("/startingScreen", { }));
  container.querySelector("#groupal").addEventListener("click", () => navigateTo("/groupal", { }));
  container.querySelector("#individual").addEventListener("click", () => navigateTo("/individual", { }));
  container.querySelector("#error").addEventListener("click", () => navigateTo("/error", { }));
  //linkGrupal.addEventListener("click", () => navigateTo("/groupal", { }) );
  console.log(container);
  root.appendChild(container);
  
  };*/

  export const home = () => {
    const root = document.querySelector("#root");
    const container = document.createElement("div");
    container.innerHTML = `
    <h1> TITULO </h1>
    <a id="starting">Inicio</a> <br/>
    <a id="groupal"><ion-icon name="logo-wechat"></ion-icon>Chat Grupal</a> <br/>
    <a id="individual"><ion-icon name="chatbubble-ellipses-outline"></ion-icon>chat individual</a> <br/>
    <a id="API"><ion-icon name="key-outline"></ion-icon></a> <br/>
    <a id="error"><ion-icon name="bug-outline"></ion-icon></a> <br/>
    `;
    container.querySelector("#API").addEventListener("click", () => navigateTo("/api", { }));
    container.querySelector("#starting").addEventListener("click", () => navigateTo("/startingScreen", { }));
    container.querySelector("#groupal").addEventListener("click", () => navigateTo("/groupal", { }));
    container.querySelector("#individual").addEventListener("click", () => navigateTo("/individual", { }));
    container.querySelector("#error").addEventListener("click", () => navigateTo("/error", { }));
    //linkGrupal.addEventListener("click", () => navigateTo("/groupal", { }) );
    console.log(container);
    root.appendChild(container);
    
    };


  //  <img src="./images/error/error1.jpg" alt="error 404"/>


  /*
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
}*/
  
  /*
  const contenedor = document.createElement("section");

    contenedor.innerHTML = `
      <h1>Titulo</h1>
      <a id="individual">Chat Individual</a>
      <a id="API">API</a>
      <a id="grupal">Chat Grupal</a>
      <a id="error">Error</a>
    `
    
    contenedor.querySelector('#individual').addEventListener("click", () => alert('GRUPAL'));
    contenedor.querySelector('#API').addEventListener("click", () => alert('API'));
    contenedor.querySelector('#grupal').addEventListener("click", () => alert('INDIVIDUAL') );
    contenedor.querySelector('#error').addEventListener("click", () => alert('ERROR') );


document.getElementById('root').appendChild(contenedor)
  */