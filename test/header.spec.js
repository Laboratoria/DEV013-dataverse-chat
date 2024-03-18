// Importamos el componente Header.js
import { Header } from "../src/Components/Header.js";

// Iniciamos el bloque de pruebas describe 
describe("Componente Header", () => {
  it("Debería renderizar la estructura del header con logo, título y botones", () => {
    // Renderizamos el componente
    const header = Header();

    // Asertamos el tipo de elemento
    expect(header).toBeInstanceOf(HTMLElement);
    expect(header.tagName).toBe("HEADER");
    expect(header.classList.contains("header")).toBeTruthy();

    // Asertamos el contenido del contenedor izquierdo
    const leftContainer = header.querySelector("#container-left");
    expect(leftContainer).not.toBeNull();

    const logo = leftContainer.querySelector(".logo-header");
    expect(logo).not.toBeNull();
    expect(logo.getAttribute("src")).toBe("images/news.gif");

    const title = leftContainer.querySelector(".title-kdrama");
    expect(title).not.toBeNull();
    expect(title.textContent).toBe("K-DRAMA");

    const verseSpan = leftContainer.querySelector(".title-verse");
    expect(verseSpan).not.toBeNull();
    expect(verseSpan.textContent).toBe("VERSE");

    // Encontrando el contenido del contenedor derecho
    const rightContainer = header.querySelector("#container-right");
    expect(rightContainer).not.toBeNull();

    const chatButton = rightContainer.querySelector(".button-group-chat");
    //eslint-disable-next-line no-console
    console.log("test del chat button", chatButton)
    expect(chatButton).not.toBeNull();

    const chatLogo = chatButton.querySelector(".logo-group-chat");
    expect(chatLogo).not.toBeNull();
    expect(chatLogo.getAttribute("src")).toBe("images/group.png");

    const apiKeyButton = rightContainer.querySelector(".button-appi-key");
    expect(apiKeyButton).not.toBeNull();
    expect(apiKeyButton.textContent).toBe("Api Key");
  });
});
