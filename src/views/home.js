import { navigateTo } from "../router.js";

export default function Home(props) {
  console.log("Props de Home", props);
  const viewHome = document.createElement("div");
  viewHome.textContent = "Getting home";

  const welcomeButton = document.createElement("button");
  viewHome.appendChild(welcomeButton);
  const textButton = document.createTextNode("Go individual chat");
  welcomeButton.appendChild(textButton);

  welcomeButton.addEventListener("click", () =>
    navigateTo("/Individual", props)
  );

  return viewHome;
}
