import { Header } from './../Components/Header.js'

export function GroupChat() {
  const viewGroupChat = document.createElement("section");
  const groupChat = document.createElement("div");
  
  viewGroupChat.setAttribute("class", "view-Group-Chat");
  groupChat.innerHTML = "Chat grupal";
  viewGroupChat.appendChild(Header());
  viewGroupChat.appendChild(groupChat);
  return viewGroupChat;
  
}