import { Footer } from "../src/Components/Footer.js";
//agrupamos las pruebas con describe para el componente footer
describe("Footer component", () => {
  it("El Componente footer existe", () => {
    const footer = Footer();
    // aqui afirmamos que footer es verdadero (si esta en la pagina)
    // asegurarnos de que exista y no sea false, null, undefined
    expect(footer).toBeTruthy();
  });

  it("El contenido del footer no está vacío.", () => {
    const footer = Footer();
    // parrafo 
    const paragraph = footer.querySelector("p");
    //afirmamos que el texto dentro del elemento <p> (paragraph.textContent) 
    //no debe ser igual a una cadena vacía.
    expect(paragraph.textContent).not.toEqual("");
  });

  it("El footer muestra el contenido correcto", () => {
    const footer = Footer();
    // aqui verificamos que la classe de footer sea footer
    expect(footer.className).toBe("footer");
    //verificamos que el texto dentro del elemento <p> dentro del Footer 
    //sea igual al texto que mostramos.
    expect(footer.querySelector("p").textContent).toBe("Copyright @ 2024 Antone Gonzales & Melany Ventura")
  });
});