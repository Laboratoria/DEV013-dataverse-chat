import { setRootElement, setRoutes, onURLChange } from "./router.js";
import Welcome from "./views/Welcome.js";
import Home from "./views/Home.js";
//import IndividualChat from "./views/Individual.js";
import GroupChat from "./views/Group.js";
import NotFound from "./views/Notfound.js";

const routes = {
  "/": Welcome,
  "/Home": Home,
  //"/Individual": IndividualChat,
  "/Group": GroupChat,
  "/Notfound": NotFound,
};

const mainContainer = document.getElementById("root");

setRoutes(routes);
setRootElement(mainContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("still working");
  onURLChange(event.target.location.pathname);
});

// window.addEventListener("DOMContentLoaded", () => {
//   setRootElement(mainContainer);
// });

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
