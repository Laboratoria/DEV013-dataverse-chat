// Importando el componente ButtonReturnHome
import { ButtonReturnHome } from '../src/Components/ButtonReturnHome.js';
// Importando el navigateTo de router
import { navigateTo } from "../src/router.js"; 

// Funcion que simula el comportamiento de navigateTo dentro de router
// reemplazado por jest.fn() para la prueba de navegacion
jest.mock("../src/router.js", () => ({
  navigateTo: jest.fn(),
}));

// Iniciando el bloque de pruebas al componente ButtonReturnHome
describe("ButtonReturnHome component", () => {
  // Iniciando la verificacion del boton renderizado
  it("should render the button with correct structure", () => {
    // renderizando el componente alojado en la variable button
    const button = ButtonReturnHome();

    // Verificando la estructura del botón con la etiqueta 'DIV'
    expect(button.tagName).toBe("DIV");
    // Verificando que button contenga la clase buttonReturnHome
    expect(button.classList.contains("buttonReturnHome")).toBeTruthy();

    // Obteniendo el elemento button en la variable buttonElement
    const buttonElement = button.querySelector(".button-return-home");
    // Verificando que buttonElement tenga la instancia de HTMLButtonElement
    expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
    // Verificando que buttonElement contenga el texto Pagina principal
    expect(buttonElement.textContent).toBe("Pagina principal");
    // Verificando que buttonElement contenga el logo-home 
    expect(buttonElement.querySelector(".logo-home")).toBeTruthy();
  });

  // Iniciando otra verificacion de la estructura del boton al hacer click y su navegacion
  it("should trigger navigation to home on click", () => {
    // renderizando el componente ButtonReturnHome alojado en la variable button
    const button = ButtonReturnHome();
    // Accediendo a la función simulada navigateTo
    const navigateToMock = navigateTo; 
    // Simulando el click del boton button 
    button.querySelector(".button-return-home").click();
    // Simula la llamada del click para volver a la pagina principal
    // toHaveBeenCalledWith es una funcion que compara para verificar si la 
    // simulacion a llamado a los argumentos
    expect(navigateToMock).toHaveBeenCalledWith("/", {});
  }); 
});
