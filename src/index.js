import { Home } from './views/Home.js';
import {StartingScreen} from './views/StartingScreen.js';
import { GroupalChat } from './views/GroupalChat.js';
import { IndividualChat } from './views/IndividualChat.js';
import { Api } from './views/Api.js';
import { Error } from './views/Error.js';
import { onURLChange, setRootEl, setRoutes } from './router.js';
import { Stats } from './views/Stats.js';
//import { computeStats, filterData, sortData } from './lib/dataFunctions.js';
//import { SectionHomeS } from './components/SectionHome.js';
// import data from '../data/dataset.js';
//const sort = document.querySelector('[data-testid="select-sort"]');
//sort.addEventListener("change", ()=> {console.log("ordenado");})

const routes = {
    "/": StartingScreen,
    "/home": Home,
    "/groupal": GroupalChat,
    "/individual": IndividualChat,
    "/api": Api,
    "/error": Error,
    "/stats": Stats,
};
console.log(routes, "las rutas")
console.log(Error(), "Error")
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

