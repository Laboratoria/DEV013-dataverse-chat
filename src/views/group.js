import { navigateTo } from "../router.js";

export default function GroupChat(props) {
  const viewGroupChat = document.createElement("div");
  viewGroupChat.textContent = "Group Chat";

  const notFoundButton = document.createElement("button");
  viewGroupChat.appendChild(notFoundButton);
  const textButton = document.createTextNode("Go not found");
  notFoundButton.appendChild(textButton);

  notFoundButton.addEventListener("click", () =>
    navigateTo("/Notfound", props)
  );

  return viewGroupChat;
}
