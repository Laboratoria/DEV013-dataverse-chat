import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { navigateTo } from "../router.js";
//import { navigateTo } from "./router.js";

export const Error = () => {
  const container = document.createElement("div");
  const errorPage = document.createElement("main");
  errorPage.innerHTML = `
  <div class="containerError">
  <img  src="../images/error/error.png" alt="img-error"/>
  <button type="button" class="buttonBack">Home</button>
  <p>Error 404 not found</p>
  </div>
  `;
  errorPage.querySelector(".buttonBack").addEventListener("click", () => {navigateTo("/home", {})});
  container.append(Header(), errorPage, Footer());
  return container;
  };
/*
  export const error = () => {
   const root = document.querySelector("#root");
  const figure = document.createElement("figure");
  figure.innerHTML = `
  <figcaption>
  <img src="./images/error/error1.jpg" alt="error 404"/>
  </figcaption>`
  root.appendChild(figure);
  console.log(figure);
  return figure;
  };
  */