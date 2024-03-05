/*
ESTRUCTURA EN BASE A EL README ROUTER.
EL ROUTER: VA TOMAR UN COMPONENTE DE VISTA, EJECUTAR LA FUNCIÓN DE ESE COMPONENTE (LA FUNCIÓN DEBE DEVOLVER CÓDIGO HTML) TOMAR EL HTML Y PEGARLO EL EL ROOTELEMENT
POR CONVENCIÓN AL TENER ESTE TIPO DE COSAS, NO PERMITIMOS QUE ELEMENTOS EXTERNOS INTERACTUEN DE MANERA DIRECTA, USAMOS EL ENCAPSULAMIENTO, PARA QUE SOLO SEAN CONOCIDA AHÍ, PARA HACERLAS EXTERNAS USAMOS GETTER Y SETTER, AQUÍ SOLO APLICA EL SETTER PARA MODIFICAR EL NOMBRE
 
//EL ROUTER ES EL OBJETO QUE MAPEA LAS RUTAS  DE NUESTRO SITIO
//aquí va todo lo que se ve de mi example (VA A CONTENER TODAS LAS RUTAS DEL PROYECTO, EL OBJETO VA A CONTENER EL PATHNAME Y EL VALOR ES EL COMPONENTE, O NOMBRE DEL COMPONENTE)
let ROUTER = {
    "/": Example,
    "/about" : about
};
//es la referencia al html (div=root) en donde va el contenido de nuestros componentes
let rootElement = "";

export const setRootNames = (newRootName) => {//se usar el set de cambio de nombre no el get
    //asignar nombres del router
    rootElement = newRootName;
};



// 2 formas de acceder al objeto
//con el punto . object.name
//con el corchete la clave a la que quiero acceder
//se usa corchete por el caracter especial / el punto no distingue el caracter especial, espera valor concreto

export const setRoutes = (newRoutes) => {
    //throw errors si router no es un objeto VALIDAR QUE SEA OBJETO PARA CUMPLIR LA CONDICIÓN
    if(typeof newRoutes === "object") {//anidar un if, primero se es objeto y depués si tiene una vista de error
        if (newRoutes["/error"]) {//DEBE TENER CLAVE DE ERROR, SI NEWROUTES EXISTE
            ROUTER = newRoutes;
        }
    }

    
    //throw errors si routes no esta definido
}



//la vista del proyecto
const renderViews = (pathname, props={}) => {//pathname se refiere a lo que sigue del diagonal/ opcional el search y hash
    //limpiar el router
    const cleanRouterElements = rootElement; //guardar el router en una constante
    cleanRouterElements.innerHTML = ""; //vaciar el contenido para que no se este acumulando
    //de estar correcto 
    if(ROUTER[pathname]) {//se pregunta a router si existe(en este caso example), de ser así que me devuelva
        const ejem = ROUTER[pathname]();//nos devuelve la función example, se agregan parentesis porque si no no se ejecuta, hace referencia a la función
        cleanRouterElements.appendChild(ejem);//al nombre limpio se le agrega la función renderizada
    } else {
        cleanRouterElements.appendChild(ROUTER["/error"](props));//de no encontrar le pego al clear el error
    }
};

export const navigateTo = (pathname, props={}) => {
    // actualizar el historial con pushState

    const visitedURL = window.location.hostname + pathname; //se guarda la url y se le agrega el diagonal /

    history.pushState({}, "", visitedURL);
    // renderizar la vista con el pathname and props(propiedades)
    renderViews(pathname, props);
  }
  
  export const onURLChange = (location) => {
    // parse the location for the pathname and search params
    renderViews(location);
    // convert the search params to an object
    // render the view with the pathname and object
  }

  //pasar un parametro en lugar de dos (undefined)
  //en rederViews pasa por defecto las propiedades como objetos, por eso al no pasar dos parametros no da undefined

  //SE USA A TRAVÉS DEL INDEX JS, QUE ES EL QUE ESTA EN CONTACTO CON EL HTML COMO EL MAIN DE DATAVERSE

  */

let ROUTES = {};
let rootElement = "";

export const setRootEl = (newRoot) => {
  // assign rootEl
  rootElement = newRoot;
};

export const setRoutes = (newRoutes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  if (typeof newRoutes === "object") {
    if (newRoutes["/error"]) {
      ROUTES = newRoutes;
    }
  }
};

export const queryStringToObject = (queryString) => {
  //Esta función tiene como objetivo pasar un string a objeto

  // console.log("Este es el queryString", queryString)

  const urlProps = new URLSearchParams(queryString);
  // let finalObject;

  const finalObject = Object.fromEntries(urlProps.entries());
  console.log("Este es el finalObject", finalObject);

  return finalObject;
  //   for(let prop of urlProps){//con el prop recibimos el id
  // }

  // const finalObject =
  // const getUrl = urlProps.get("id")
  // console.log("este es el get URL", getUrl)

  // for(urlObject of urlProps){
  //   console.log("🚀 ~ queryStringToObject ~ urlObject:", urlObject)
  // }

  //Esta función la necesitamos porque nos ayudará a acceder a los datos requeridos aunque la página se recargue
  //Obtener el string que necesitamos
  // const searchParams = window.location.search;//devuelve lo despues de la ruta
  // console.log(searchParams, "search");
  //URLSearchParams convierte la cadena en un objeto
  // const urlProps = new URLSearchParams(searchParams);
  // console.log(urlProps, "url");
};

const renderView = (pathname, props = {}) => {
  console.log("props", props);
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
  const cleanRoot = rootElement;
  cleanRoot.innerHTML = "";
  // console.log("Nuestro pathname", [pathname])
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    // console.log(template, "tem");
    cleanRoot.appendChild(template);
  } else {
    cleanRoot.appendChild(ROUTES["/error"]());
  }
};

export const navigateTo = (pathname, props = {}) => {
  // console.log("Pathname dentro de navigate", pathname);
  history.pushState({}, "", pathname);
  //El signo "?" dentro de una ruta URL sirve para dividir las vistas de las variables.
  const splitPathname = pathname.split("?");
  // console.log(typeof splitPathname[0])
  props = splitPathname[1];
  // console.log("props modificado", props)
  pathname = splitPathname[0];
  //  console.log("pathname modificado", pathname)

  // update window history with pushState
  // render the view with the pathname and props
  //hostname
  //const urlVisited = window.location.hostname + pathname;
  // console.log(urlVisited);
  // const newPathname = pathname +
  const objectProps = queryStringToObject(props);
  console.log("🚀 ~ navigateTo ~ objectProps:", objectProps);

  renderView(pathname, objectProps);
};

export const onURLChange = (pathname) => {
  // parse the location for the pathname and search params
  const searchURL = window.location.search;
  // console.log("🚀 ~ onURLChange ~ searchURL:", searchURL)
  //const search = new URLSearchParams()
  // convert the search params to an object
  // render the view with the pathname and object
  // console.log("path", pathname);
  // console.log("props", props);
  const objectProps = queryStringToObject(searchURL);
  renderView(pathname, objectProps);
};

