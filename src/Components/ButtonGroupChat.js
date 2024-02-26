import { navigateTo } from "../router.js";

export const ButtonGroupChat = () => {
    const buttonGroupChat = document.createElement("div");
    buttonGroupChat.setAttribute("class", "buttonGroupChat");
  
    buttonGroupChat.innerHTML = `
    <button class="button-group-chat">
        <img src="images/group.png" class="logo-group-chat">
        Chat Grupal
    </button>
    `;
    // para volver a la pagina principal
    const buttonGroupChats = buttonGroupChat.querySelector(".button-group-chat");
    buttonGroupChats.addEventListener("click", () => {
      navigateTo("/groupchat", {})
    })
    return buttonGroupChat;
}
