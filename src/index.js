import { home } from './views/home.js';
import {StartingScreen} from './views/startingScreen.js';
import { groupal } from './views/groupalChat.js';
import { Individual } from './views/individualChat.js';
import { api } from './views/API.js'
import { error } from './error.js';
import { onURLChange, setRootEl, setRoutes } from './router.js';
//import { computeStats, filterData, sortData } from './lib/dataFunctions.js';
// import data from '../data/dataset.js';

const routes = {
    "/": StartingScreen,
    "/home": home,
    "/groupal": groupal,
    "/individual":Individual,
    "/api": api,
    "/error": error,
};

const root = document.getElementById("root");
setRoutes(routes);
setRootEl(root)

document.addEventListener("DOMContentLoaded", (event) => {
    console.log(event.target.location.pathname);
    onURLChange(event.target.location.pathname);
});

window.addEventListener("popstate", (event) => {
    onURLChange(event.target.location.pathname);
});

//const buttonClearFilter = document.querySelector("button[data-testid='button-clear']"); //botón limpiar filtros
//const order = document.querySelector("[data-testid='select-sort']");//para ordenar
//const filterGender = document.querySelector("[data-testid='select-filterGender']");
//const filterSpecie = document.querySelector("[data-testid='select-filter']");
//const filterPersonality = document.querySelector("[data-testid='select-filterPersonality']");

//order.addEventListener("change", () => {
//     console.log("botón order");
//   });



  
