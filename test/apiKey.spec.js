import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

//agrupamos las pruebas con describe para la funcion getApiKey
describe("getApiKey", () => {
  // prueba individual para ver si devuelve el valor de getApi]Key
  it("should return the value of the API key", () => {
    // alojamos en esta variable un valor de ejemplo
    const apiKey = "dafra1510384";
    setApiKey(apiKey); 
    //Aquí se está afirmando que el resultado de llamar a getApiKey 
    //debería ser igual a la clave de API que establecimos en la linea 8.
    expect(getApiKey()).toBe("dafra1510384");
  });
  //Aquí se define otra prueba que verifica si la función getApiKey devuelve false 
  //cuando no hay ninguna clave de API establecida.
  it("should return false if there is no api key", () => {
    const apiKey = "";
    setApiKey(apiKey);
    expect(getApiKey()).toBeFalsy();
  });
});

//agrupamos las pruebas con describe para la funcion setApiKey
describe("setApiKey", () => {
  // prueba individual para ver si devuelve el valor de setApiKey
  it("should set the API Key correctly", () => {
    // alojamos en esta variable un valor de ejemplo
    const apiKey = "antone";
    // utilizamos la función setApiKey para establecer esa clave de API
    setApiKey(apiKey);
    //eslint-disable-next-line no-console
    //console.log(setApiKey(apiKey))
    //expect se utiliza para afirmar que el resultado de llamar a 
    //localStorage.getItem('apiKey') debe ser igual a la clave de API 
    //que hemos establecido anteriormente.
    expect(getApiKey()).toEqual(apiKey);
  });
  // debería devolver falso si la API no se guarda 
  it("should return false if the API is not saved", () => {
    const apiKey = "";
    setApiKey(apiKey);
    expect(getApiKey()).toBeFalsy();
  });
});