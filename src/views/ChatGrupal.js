import { Header } from './../Components/Header.js'

export function ChatGrupal() {
  const header = document.createElement("section");
  header.setAttribute("class", "header")

  header.appendChild(Header())

  return header
  
}