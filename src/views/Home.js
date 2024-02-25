//PANTALLA PRINCIPAL
//import { AsideHome } from "../components/AsideHome.js";
//import { Footer } from "../components/Footer.js";
/*import { Header } from "../components/Header.js";
import { SectionHome } from "../components/SectionHome.js";

export const Home = () => {
  const container = document.createElement("div");
  const main = document.createElement("main");
  //main.append(AsideHome(), SectionHome());
  main.append(SectionHome());
  container.append(Header(), main);

  return container;
};*/

//PANTALLA PRINCIPAL
//import { AsideHome } from "../components/AsideHome.js";
import { Footer } from "../components/Footer.js";
import { Header } from "../components/Header.js";
import { SectionHome } from "../components/SectionHome.js";

export const Home = () => {
  const container = document.createElement("div");
  const main = document.createElement("main");
  main.append(SectionHome());

  container.append(Header(), main, Footer());

  return container;
};
