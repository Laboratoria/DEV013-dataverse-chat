import { Header } from "../components/Header.js";
import { Footer } from "./../components/Footer.js";

export const error = () => {
  const container = document.createElement("div");
  const errorPage = document.createElement("main");
  errorPage.innerHTML = `
  <img src="../images/error/error.png" alt="img-error"/>
  <p>Error 404 not found</p>
  `;
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