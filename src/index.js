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
import renderItems from './views/Example.js';//importo el nombre de la const desde el view y nombre del archivo.

import data from './data/dataset.js';
import { setRoutes, setRootNames } from './router.js';
renderItems(data);

const routes = {//ESTE HACE REFERENCIA AL ROUTER DE ROUTER.JS
    "/": Example,
    "/error": "",
}
const root = document.querySelector("#root");
//se pasa por parametro el routes del const
setRoutes(routes);// se debe definir, importar la función
setRootNames(routes)
