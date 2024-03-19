// Importamos el componente ListGroupChat.js
import { ListGroupChat } from "../src/Components/ListGroupChat.js";

// Iniciamos el bloque de pruebas describe
describe("Componente ListGroupChat", () => {
  // Definiendo el test unitario con la funcion it
  it("Debería renderizar una lista ordenada con elementos de chat grupal", () => {
    // Renderizamos el componente almacenado en la constante listaChat
    const listaChat = ListGroupChat();

    // Encontramos el tipo de elemento con expect
    // para tomar el valor y comprobar su condicion especifica
    // En esta siguiente linea verificamos si header es una instancia de HTMLUListElement
    // indicando que es un elemento DOM
    expect(listaChat).toBeInstanceOf(HTMLUListElement);
    // Verificamos que listaChat es ul
    expect(listaChat.tagName).toBe("UL");
    // Verificamos que ul-group sea parte de listaChat
    expect(listaChat.classList.contains("ul-group")).toBeTruthy();

    // Verificamos que la estructura básica del primer elemento (tarjeta)
    // Buscamos la primera etiqueta li de listaChat
    const primerElemento = listaChat.querySelector("li");
    // Verificamos que el primer elemento no sea nulo
    expect(primerElemento).not.toBeNull();

    // Verificamos las propiedades del primer elemento si tiene los atributos
    expect(primerElemento.hasAttribute("itemscope")).toBeTruthy();
    expect(primerElemento.hasAttribute("itemprop")).toBeTruthy();
    expect(primerElemento.getAttribute("itemtype")).toBe("kdramas");
    expect(primerElemento.classList.contains("list-group")).toBeTruthy();

    // Verificamos la imagen y su atributo src
    const imagen = primerElemento.querySelector("img");
    // Verificamos que imagen no sea nulo
    expect(imagen).not.toBeNull();
    // Verifica si tiene el atributo
    expect(imagen.hasAttribute("src")).toBeTruthy();

    // Verificamos la existencia del título y su contenido de texto
    const titulo = primerElemento.querySelector("h3");
    // Vericamos que titulo no sea nulo
    expect(titulo).not.toBeNull();
  });
});
