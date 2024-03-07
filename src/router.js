import dataset from "./data/dataset.js";

//Esta variable almacena información sobre las rutas en tu SPA.
let ROUTES = {};

//  va a ser la referencia al elmento html en donde vamos a dibujar el contenido de nuestros componentes
let rootEl = '';

//nos va a permitir setear un valor a nuestras variables
//y saber si el valor es correcto
export const setRootEl = (newRootElementValue) => {
  // validar si el valor que se le va  asignar a la variable sea correcto
  //validar si newRootElementValue es un objeto html
  rootEl = newRootElementValue;
}

export const setRoutes = (newRoutesValue) => {
  // opcional Lanzar errores si las rutas no son un objeto
  // opcional Lanzar errores si las rutas no definen una ruta /error
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue['/error']) {
      // asignar RUTAS
      ROUTES = newRoutesValue;
      //console.log("routes", ROUTES);
    }
  }
}

//esta es opcional segun el README
export const queryStringToObject = (queryString) => {
// convierte la cadena de consulta a URLSearchParams
  const newURL = new URLSearchParams(queryString);
  console.log("Aqui se ve la new url", newURL);
// convierte URLSearchParams en un objeto
  const objectURL = Object.fromEntries(newURL);
// devolver el objeto
  console.log("Aqui vemos el objecturl", objectURL);
  return objectURL;
}

// props va a ser un objeto vacio 
const renderView = (pathname, props = {}) => {
  // borrar el elemento raíz(el elmento div root)
  let template;
  const root = rootEl;
  root.innerHTML = '';
  //console.log(ROUTES);
  // busca la vista correcta en RUTAS para el nombre de ruta
  if (ROUTES[pathname]) {
    template = ROUTES[pathname];
  } else {
    template = ROUTES['/error'];
  }
  //console.log('aqui es template', template);
  const component = template(props);
  //console.log(typeof component);
  console.log("es el componente ", component);
  root.appendChild(component);
  // en caso de que no se encuentre, renderice la vista de error
  // renderiza la vista correcta pasando el valor de los accesorios
  // agrega el elemento de vista al elemento raíz del DOM
}

/**
 * 
 * @param {*} pathname 
 * @param {*} props 
 */

export const navigateTo = (pathname, props = {}) => {
  // actualiza el historial de la ventana (navegador) con pushState
  console.log("origin", window.location.origin);
  const URLvisited = window.location.origin + pathname;
  console.log('url', URLvisited);
  window.history.pushState({}, '', URLvisited);
  console.log('pathname', pathname);
  // renderiza la vista con el nombre de la ruta y los accesorios
  console.log(props);
  
  // creando un URL object para extraer el pathname
  const newURL = new URL(URLvisited);
  console.log('new url', newURL.pathname);
  renderView(newURL.pathname, props);
}

export const onURLChange = () => {
  // analiza la ubicación de la ruta y los parámetros de búsqueda
  const pathname = window.location.pathname;
  console.log('pathname onurlchange', pathname)
  // convierte los parámetros de búsqueda en un objeto
  const searchObject = queryStringToObject(window.location.search);
  console.log('search object', searchObject);
  // encontramos el id para compararlo con el dataset para obtener la info (metodo find)
  const newSearchObject = dataset.find((kDrama) => kDrama.id === searchObject.id);
  console.log('newsearchobject', newSearchObject)
  renderView(pathname, newSearchObject);
}
