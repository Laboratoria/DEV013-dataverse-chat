let ROUTES = {};

let rootElement; // referencia al elemento html

export const setRootElement = (newRootElementValue) => {
  //validar si es un objeto
  //validar si existe
  rootElement = newRootElementValue;
};

//1 obtener url actual
//Comparar con el objeto
//Si no se encuentra dentro del objeto se envia a notfound

export const setRoutes = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue["/Notfound"]) {
      ROUTES = newRoutesValue;
    }
  }
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
};
// quien va a llamar a setRoutes(Home()); ?

//const queryStringToObject = (queryString) => {
// convert query string to URLSearchParams
// convert URLSearchParams to an object
// return the object
//};

const renderView = (pathname, props = {}) => {
  const root = rootElement;
  root.innerHTML = ""; // clear the root element
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES["/Notfound"]());
  }
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
  //inserta el contenido
};

export const navigateTo = (pathname, props = {}) => {
  const URLvisited = pathname;
  // console.log(URLvisited);
  history.pushState({}, "", URLvisited);
  //el objeto state {objeto asociado al nuevo registro}
  // update window history with pushState
  // render the view with the pathname and props
  //actualiza el navegador
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(location);
};



/*--------------------------------------------------------------------------------------------------------------
// Importaciones de componentes y funciones necesarias
import { navigateTo } from './router';

import  Header from "./components/Header.js"
import  Footer  from "./components/Footer.js";

// Definición de la vista Home
export const Home = (props) => {
   const viewHome = `${Header()} <!-- Utilizamos el componente Header -->
    <div>
      <h1>${props.title}</h1>
      <p>Bienvenido a nuestra aplicación.</p>
    </div>
    ${Footer()} <!-- Utilizamos el componente Footer -->
  `;
  return viewHome;
};

// Definición de la función goToGroupChat
const goToGroupChat = () => {
  navigateTo('/chat-grupal', { title: 'Chat Grupal' }); // Llamada a navigateTo con props
};

// Definición de la función goToIndividualChat
const goToIndividualChat = () => {
  navigateTo("/chat-individual", { title: "Chat Individual" }); // Llamada a navigateTo con props
};





//-----------------------------------------------------------------------
// Definición de la vista Chat Individual
export const IndividualChat = (props) => {
  return `
    ${Header()} <!-- Utilizamos el componente Header -->
    <div>
      <h1>Chat Individual</h1>
      <p>Bienvenido, ${props.characterName}!</p>
      <p>Aquí puedes chatear individualmente.</p>
    </div>
    ${Footer()} <!-- Utilizamos el componente Footer -->
  `;
};

// Definición de la función goToIndividualChat con props
const goToIndividualChat = (characterName) => {
  navigateTo(`/chat-individual/${characterName}`, { characterName }); // Llamada a navigateTo con props
};
*/
