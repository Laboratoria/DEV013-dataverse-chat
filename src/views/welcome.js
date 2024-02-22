import { navigateTo } from "../router.js";
import creatingHeaderFromComponents from "../components/Header.js";

export default function Welcome(props) {
  const viewWelcome = document.createElement("div");
  viewWelcome.textContent = "Welcome";

  viewWelcome.appendChild(creatingHeader());
  viewWelcome.appendChild(creatingHeaderFromComponents());

  const homeButton = document.createElement("button");
  viewWelcome.appendChild(homeButton);
  const textButton = document.createTextNode("Go home");
  homeButton.appendChild(textButton);

  homeButton.addEventListener("click", () =>
    navigateTo("/Home", { name: "menta" })
  );

  return viewWelcome;
}

function creatingHeader() {
  const header = document.createElement("h1");
  header.innerHTML = "My Beauty Plants";
  return header;
}
// {
// Header: function () {
// const homeContainer = document.getElementById("welcome");

// const header = document.createElement("h1");
// header.innerHTML = "My Beauty Plants";
// homeContainer.appendChild(header);
// return header;
// },
// })
//);
