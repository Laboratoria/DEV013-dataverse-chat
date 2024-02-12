import Home from "./views/home.js";

setRoutes({
  "/": Home,
//   "/individual": Chat_individual,
//   "/groupal": Chat_Groupal,
//   "/error": Error_page,
//   "/chatkey": Chat_key,
});

let ROUTES = {}; //Almacena las rutas
let rootEl; //Referencia el root donde se renderizan las vistas

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  ROUTES = routes;
};

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
};

const renderView = (pathname, props = {}) => {
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
};

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  // render the view with the pathname and props
};

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
};
