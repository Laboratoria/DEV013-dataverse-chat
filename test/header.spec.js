// Importamos el componente Header.js
import { Header } from "../src/Components/Header.js";

// Iniciamos el bloque de pruebas describe
describe("Componente Header", () => {
  // Definiendo el test unitario con la funcion it
  it("Debería renderizar la estructura del header con logo, título y botones", () => {
    // Renderizando el componente almacenado en la constante header
    const header = Header();

    // Encontramos el tipo de elemento con expect
    // para tomar el valor y comprobar su condicion especifica
    // En esta siguiente linea verificamos si header es una instancia de HTMLElement
    // indicando que es un elemento DOM
    expect(header).toBeInstanceOf(HTMLElement);
    // Verifica si header es HEADER, tagName accede a la propiedad header
    // devolviendo la etiqueta en mayusculas y viendo si coincide con el valor esperado
    expect(header.tagName).toBe("HEADER");
    // Verificamos si la lista de clases del header contiene la clase "header"
    // toBeTruthy nos ayuda a evaludar si el valor es verdadero
    expect(header.classList.contains("header")).toBeTruthy();

    // Verificamos el contenido del contenedor izquierdo alojado en la constante leftContainer
    const leftContainer = header.querySelector("#container-left");
    // Vericamos que leftContainer no sea nulo 
    expect(leftContainer).not.toBeNull();
    
    // Verificamos para el contenedor logo-header
    const logo = leftContainer.querySelector(".logo-header");
    // Verificamos que logo no sea nulo
    expect(logo).not.toBeNull();
    // Comprobando sus atributos con getAttribute para el archivo gif
    expect(logo.getAttribute("src")).toBe("images/news.gif");

    // Verificamos para el contenedor title-kdrama
    const title = leftContainer.querySelector(".title-kdrama");
    expect(title).not.toBeNull();
    expect(title.textContent).toBe("K-DRAMA VERSE");

    // Verificamos para el contenedor container-right
    const rightContainer = header.querySelector("#container-right");
    expect(rightContainer).not.toBeNull();

    // Verificamos para el contenedor button-group-chat
    const chatButton = rightContainer.querySelector(".button-group-chat");
    expect(chatButton).not.toBeNull();

    // Verificamos para el contenedor logo-group-chat
    const chatLogo = chatButton.querySelector(".logo-group-chat");
    expect(chatLogo).not.toBeNull();
    expect(chatLogo.getAttribute("src")).toBe("images/group.png");

    // Verificamos para el contenedor button-appi-key
    const apiKeyButton = rightContainer.querySelector(".button-appi-key");
    expect(apiKeyButton).not.toBeNull();
    expect(apiKeyButton.textContent).toBe("Api Key");
  });
});
