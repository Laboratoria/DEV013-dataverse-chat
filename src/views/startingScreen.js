//pantalla 
//import { navigateTo } from '../router';

export const startingScreen = () => {
    const header = document.createElement("header");
    header.innerHTML = "PANTALLA DE INICIO";
    return header;
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
