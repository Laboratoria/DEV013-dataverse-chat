// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { Home } from './views/Home.js';
import { Error } from './views/Error.js';
import { IndividualChat } from './views/IndividualChat.js';
import { GroupChat } from './views/GroupChat.js';
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
  "/error": Error,
  "/individualchat": IndividualChat,
  "/groupchat": GroupChat,
}

const viewContainer = document.getElementById('root');
// Asignar las rutas
setRoutes(routes);

// Establecemos el elemento raíz donde se representarán las vistas, cuando cambia la url
window.addEventListener("DOMContentLoaded", (event) => {
  setRootEl(viewContainer);
  //Obtenemos la ruta de la ventana global
  console.log ('window', window.location.pathname + window.location.search);
  onURLChange(window.location.pathname + window.location.search);
});

window.onpopstate = onURLChange;
