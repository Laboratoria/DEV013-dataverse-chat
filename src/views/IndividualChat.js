import { Footer } from "../components/Footer.js";
import { Header } from "../components/Header.js";

export const IndividualChat = () => {
  const container = document.createElement("div");
  const main = document.createElement("main");
  main.innerHTML = `
    <h2>Chat individual</h2>
  `;

  container.append(Header(), main, Footer());

  return container;
};
