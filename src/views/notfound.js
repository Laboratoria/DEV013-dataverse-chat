import { navigateTo } from "../router.js";

export default function NotFound(props) {
  const viewNotFound = document.createElement("div");
  viewNotFound.textContent = "404";

  const homeButton = document.createElement("button");
  viewNotFound.appendChild(homeButton);
  const textButton = document.createTextNode("Go back home");
  homeButton.appendChild(textButton);

  homeButton.addEventListener("click", () => navigateTo("/Home", props));

  return viewNotFound;
}
