// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
//import renderItems from './views/Example.js';//importo el nombre de la const desde el view y nombre del archivo.
//import startingScreen from './views/startingScreen.js';
// import {Example} from './views/Example.js';
// import data from './data/dataset.js';
// import { onURLChange, setRootEl, setRoutes  } from './router.js';
//renderItems(data);
//Example();
//startingScreen(data)
/*
const routes = {//ESTE HACE REFERENCIA AL ROUTER DE ROUTER.JS
    "/": Example,
    "/error": "some",//no dejar en blanco, va el componente error
}
const root = document.getElementById("root");
//se pasa por parametro el routes del const
//PARA VINCULARSE CON EL ROUTER
setRoutes(routes);// se debe definir, importar la función
setRootEl(root)//puede traerse directo sin la const (document.querySelector("#root"));
//usar un listener para escuchar lo que va a suceder en el document con
//carga el contenido ya que carga todo
//DOMContentLoaded(se dispara cuando el contenido del archivo HTML se ha cargado en el navegador)
document.addEventListener("DOMContentLoaded", (event) => {//document va a escuchar, DOMContentLoaded(se refiere cuando el documento fue parciado(interpretado)) se espera a que todo el contenido de modulos ya fuera cargado
    console.log("Dom cargado");//vamos a llamar a la función onURLChange, porque es la que esta cambiando la url
    console.log(event.target.location.pathname);
    onURLChange(event.target.location);
    console.log("hola");
    //console.log(event); el target es el document y lo que llamamos es location, url
})*/


/*localStorage.setItem("perro", "12355");
var cat = localStorage.getItem("API-KEY");
console.log(cat);*/

import { Home } from './views/Home.js';
import {StartingScreen} from './views/StartingScreen.js';
import { GroupalChat } from './views/GroupalChat.js';
import { IndividualChat } from './views/IndividualChat.js';
import { Api } from './views/Api.js'
import { Error } from './views/Error.js';
import { onURLChange, setRootEl, setRoutes } from './router.js';
import { Stats } from './views/Stats.js';
//import { computeStats, filterData, sortData } from './lib/dataFunctions.js';
// import data from '../data/dataset.js';

const routes = {
    "/": StartingScreen,
    "/home": Home,
    "/groupal": GroupalChat,
    "/individual": IndividualChat,
    "/api": Api,
    "/error": Error,
    "/stats": Stats,
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
