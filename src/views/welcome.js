import { navigateTo } from "../router.js";

export default function Welcome(props) {
  const viewWelcome = document.createElement("div");
  viewWelcome.textContent = "Welcome";

  const homeButton = document.createElement("button");
  viewWelcome.appendChild(homeButton);
  const textButton = document.createTextNode("Go home");
  homeButton.appendChild(textButton);

  homeButton.addEventListener("click", () => navigateTo("/Home"));

  return viewWelcome;
}
