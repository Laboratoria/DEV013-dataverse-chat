// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { Home } from './views/Home.js';
import { Error } from './views/Error.js';
import { ChatIndividual } from './views/ChatIndividual.js';
import { ChatGrupal } from './views/ChatGrupal.js';
import { About } from './views/About.js';
import { ApiKey } from './views/ApiKey.js';
import { setRootEl, setRoutes, onURLChange } from './router.js'
/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/


//definición de rutas:
const routes = {
  "/": Home,
  "/about": About,
  "/error": Error,
  "/chatindividual": ChatIndividual,
  "/chatgrupal": ChatGrupal,
  "/apikey": ApiKey,
}

const viewContainer = document.getElementById('root');
// Asignar las rutas
setRoutes(routes);

// Establecer el elemento raíz donde se representarán las vistas.
window.addEventListener("DOMContentLoaded", (event) => {
  console.log(event,);
  //console.log(window.location.pathname);
  setRootEl(viewContainer);
  //obtener la ruta de la ventana global por eso mejor usar window
  onURLChange(window.location.pathname)

});

