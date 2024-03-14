let ROUTES = {};
let rootEl;

export const setRoutes = (routes) => {
  if (typeof routes === "object") {
    if (routes["/error"]){
      ROUTES = routes;
    }
  } 
};
export const setRoutesEl = (el) => {
  rootEl = el;
};
export const renderView = (pathname, props) => {
  rootEl.innerHTML = "";
};
export const navigateTo = (pathname, props) => {};
export const onURLChange = (location) => {};
export const queryStringToObject = (queryString) => {};
