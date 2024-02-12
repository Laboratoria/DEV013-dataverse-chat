// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { setRootEl, setRoutes, navigateTo } from "./router.js";

const root = document.getElementById("root");
setRootEl(root);

setRoutes({
  "/": Home,
});


window.addEventListener("popstate", (event) => {
  onURLChange(event.location);
});

// Handle initial URL load
window.addEventListener("DOMContentLoaded", () => {
  // set root element
  // invoke onURLChange
});
navigateTo("/");
/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

// Define your routes and their associated views

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(/* root element */);
});
