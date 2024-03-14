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

import { Home } from "./views/Home";
import { Error } from "./views/Error";
import { ChatIndividual } from "./views/ChatIndividual";
import { ChatGrupal } from "./views/ChatGrupal";
import { setRoutesEl, setRoutes, onURLChange } from "./router";

const routes = {
  "/home": Home,
  "/error": Error,
  "/chatIndividual": ChatIndividual,
  "/chatGrupal": ChatGrupal,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  setRoutesEl(root);
  onURLChange();
});