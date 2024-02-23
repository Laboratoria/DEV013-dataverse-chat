import { navigateTo } from "../router.js";

export default function IndividualChat(props) {
  const viewIndividualChat = document.createElement("div");
  viewIndividualChat.textContent = "Individual Chat";

  const groupButton = document.createElement("button");
  viewIndividualChat.appendChild(groupButton);
  const textButton = document.createTextNode("Go group chat");
  groupButton.appendChild(textButton);

  groupButton.addEventListener("click", () => navigateTo("/Group", props));

  return viewIndividualChat;
}
