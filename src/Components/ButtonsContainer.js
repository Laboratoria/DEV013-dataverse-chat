import { navigateTo } from "../router.js";


export const ButtonsContainer = () => {
  const buttonsContainer = document.createElement("div");
  buttonsContainer.setAttribute("class", "buttonsContainer");

  buttonsContainer.innerHTML = `
  <button class="button-home">
  <img src="src/images/home.png" class="logo-home">
  Pagina principal
  </button>

  <button class="button-chat">
  <img src="src/images/chat.png" class="logo-chat-single">
  Chatear
  </button>
  `;
  const buttonHome = buttonsContainer.querySelector(".button-home");
  buttonHome.addEventListener("click", () => {
    navigateTo("/", {})
  })

  const buttonChat = buttonsContainer.querySelector(".button-chat");
  buttonChat.addEventListener("click", () => {
    navigateTo("/apikey", {})
  })

  return buttonsContainer;
}