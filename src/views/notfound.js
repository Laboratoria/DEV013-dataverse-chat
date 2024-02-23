import { navigateTo } from "../router.js";

export default function NotFound() {
  const viewNotFound = document.createElement("div");

  viewNotFound.innerHTML += `
    <h1>404</h1>
    <p>Oh no!!</p>
    <p>
      Lamentamos que hayas<br />
      llegado al final del jardín
    </p>
    <p>Para ver más plantas</p>
    <!--<button id="homeButton">Ir a inicio</button>-->
  `;

  const homeButton = document.createElement("button");
  viewNotFound.appendChild(homeButton);
  const textButton = document.createTextNode("Go not found");
  homeButton.appendChild(textButton);

  homeButton.addEventListener("click", () => navigateTo("/Home"));

  return viewNotFound;
}

// function goHome() {
//   const button = document.getElementById("homeButton");
//   button.addEventListener("click", () => {
//     navigateTo("/Home");
//   });
// }

// const creatingNotFound = () => {
//   const viewNotFound = document.createElement("div");
//   viewNotFound.innerHTML += `
//   <h1>404</h1>
//   <button>Go back home</button>
//   `;
//   return viewNotFound;
// };
