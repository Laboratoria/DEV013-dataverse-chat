//pantalla
//import { navigateTo } from '../router';
export const startingScreen = () => {
  const container = document.createElement("div");
  container.innerHTML = `
    <img src="../images/Logo.png" alt="logo"/>
    <h1>WIKINOOK</h1>
    <button class="btn-clear-search">INICIO</button>
    <img src="../images/Imagen-pantalla-bienvenida.png" alt="imagen-inicio"/>`;
  
  return container;
};
/*
export const startingScreen = () => {
    const root = document.querySelector("#root");
    const header = document.createElement("header");
    header.innerHTML = `
    <div class="header-title">
    <img src="./images/wikinook.png" alt="starting"/>
    <button type="button" class="button">INICIO</button>`;
    header.querySelector(".button").addEventListener("click", () => console.log("hola"));
    //header.querySelector(".button").addEventListener("click", () => navigateTo("/home", { }));
    //return header;
    root.appendChild(header);
};

*/
