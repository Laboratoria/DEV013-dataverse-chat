// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { Home } from './views/Home.js';
import { Error } from './views/Error.js';
import { IndividualChat } from './views/IndividualChat.js';
import { GroupChat } from './views/GroupChat.js';
import { ApiKey } from './views/ApiKey.js';
import { setRootEl, setRoutes, navigateTo, onURLChange } from './router.js'
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
  "/apikey": ApiKey,
}

const viewContainer = document.getElementById('root');
// Asignar las rutas
setRoutes(routes);

// Establecer el elemento raíz donde se representarán las vistas.
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("#HOLI")
  console.log(event, );
  setRootEl(viewContainer);
  //obtener la ruta de la ventana global por eso mejor usar window
  console.log ('window', window.location.pathname);
  onURLChange(event);
});

// agregando popstate
//window.addEventListener("popstate", (event) => {
  //console.log('Evetno target para popstate', event.target.location.pathname);
  //onURLChange(event.target.location.pathname);
//});
window.onpopstate = onURLChange;
