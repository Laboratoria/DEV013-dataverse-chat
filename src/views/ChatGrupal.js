import { Header } from './../Components/Header.js'

export function ChatGrupal() {
  const header = document.createElement("section");
  header.setAttribute("class", "header")
  header.innerHTML = "Chat grupal"
  header.appendChild(Header())

  return header
  
}