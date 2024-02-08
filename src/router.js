//aquí va el manejo de mi router:
let ROUTER = {//aquí va todo lo que se ve de mi example, mi vista
    "/": Example,
    "/about" : about
};
//es la referencia al html (div=root) en donde va el contenido de nuestros componentes
let rootElement;

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
        if (newRoutes["/error"]) {
            ROUTER = newRoutes;
        }
    }
    //throw errors si routes no esta definido
}
//la vista del proyecto
const renderViews (pathname, props={}) => {//pathname se refiere a lo que sigue del diagonal/ opcional el search y hash
    //limpiar el router
    const cleanRouterElements = rootElement; //guardar el router en una constante
    cleanRouterElements.innerHTML = ""; //vaciar el contenido para que no se este acumulando
    //de estar correcto 
    if(ROUTER[pathname]) {//se pregunta a router si existe(en este caso example), de ser así que me devuelva
        const ejem = ROUTER[pathname]();//nos devuelve la función example, se agregan parentesis porque si no no se ejecuta
        cleanRouterElements.appendChild(ejem);//al nombre limpio se le agrega la función renderizada
    } else {
        cleanRouterElements.appendChild(ROUTER["/error"]());//de no encontrar le pego al clear el error
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