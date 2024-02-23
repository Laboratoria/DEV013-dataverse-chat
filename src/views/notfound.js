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
  `;

  const homeButton = document.createElement("button");
  viewNotFound.appendChild(homeButton);
  const textButton = document.createTextNode("Go not found");
  homeButton.appendChild(textButton);

  homeButton.addEventListener("click", () => navigateTo("/Home"));

  const modalButton = document.createElement("button");
  viewNotFound.appendChild(modalButton);
  const text = document.createTextNode("Go to modal");
  modalButton.appendChild(text);

  modalButton.addEventListener("click", () => navigateTo("/EmptyApiKey"));

  return viewNotFound;
}
