// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import {setRoutes, navigateTo, setRootElement , onURLChange} from "./router.js";
import {Home} from "./views/home.js";
import {error} from "./views/error.js"


//1.- Definir rutas en router.
const routes = {
  "/": Home,
  "/error": error,
  //   "/individual": Chat_individual,
  //   "/groupal": Chat_Groupal,
  //   "/chatkey": Chat_key,
};

//2.- Pasar "root element" a router.
const root = document.getElementById("root");
setRootElement(root);
setRoutes(routes);

//3.- Invocar el router para renderizar la vista correcta.
document.addEventListener('DOMContentLoaded',(event)=>{
  onURLChange(event.target.location.pathname); 
});




// window.addEventListener("popstate", (event) => {
//   onURLChange(event.location);
// });

// // Handle initial URL load
// window.addEventListener("DOMContentLoaded", () => {
//   // set root element
//   // invoke onURLChange
// });
// navigateTo("/");









/* Handle initial URL load
window.addEventListener("DOMContentLoaded", () => {
  // set root element
  const pathname = window.location.pathname; // Get initial pathname
  navigateTo(pathname); // Use your router's navigation function

  // invoke onURLChange
});



 Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(root element);
});
navigateTo();
window.addEventListener("popstate", (event) => {
  onURLChange(event.location);
});*/
