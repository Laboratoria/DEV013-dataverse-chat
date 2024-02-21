import { Header } from "../components/Header.js";
//import { Footer } from "../components/Footer.js";
//import { navigateTo } from "../router.js";

export const Error = () => {
  const container = document.createElement("div");
  const errorPage = document.createElement("main");
  errorPage.innerHTML = `
  <div class="container-error">
    <img  src="../images/error/error.png" alt="img-error"/>
    <h3>Oooops! no hemos podido encontrar lo que buscas :( </h3>
    <a class="back-to-home">Regresa al inicio</a>
  </div>
  `;
  errorPage.querySelector(".back-to-home").addEventListener("click", () => {
    navigateTo("/home", {})
  });
  container.append(Header(), errorPage, Footer());
  return container;
  };
