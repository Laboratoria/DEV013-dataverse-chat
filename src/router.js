let ROUTES = {
  //   "/": Welcome,
  //   "/home": Home,
  //   "/individual": IndividualChat,
  //   "/group": GroupChat,
  //   "/notfound": NotFound,
};

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
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  //si la url no se encuentra en ROUTES enviame a notfound
  ROUTES = newRoutesValue;
};
// quien va a llamar a setRoutes(Home()); ?

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
};

const renderView = (pathname, props = {}) => {
  const root = rootElement;
  root.innerHTml = ""; // clear the root element
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname]();
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES["/notfound"]);
  }
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
  //inserta el contenido
};

export const navigateTo = (pathname, props = {}) => {
  const URLvisited = window.location.hostname + pathname;
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
