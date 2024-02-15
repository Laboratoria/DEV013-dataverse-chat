//PANTALLA PRINCIPAL
import { navigateTo } from '../router.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { cards } from '../components/Cards.js'; 
import { filter } from '../components/select.js';
import { SectionOrder } from '../components/Section.js'
import data from '../data/dataset.js';

  export const home = () => {
    const container = document.createElement("div");
    const homePage = document.createElement("main");
    homePage.innerHTML = `
    <a id="groupal"><ion-icon name="logo-wechat"></ion-icon>Chat Grupal</a>
    <a id="individual"><ion-icon name="chatbubble-ellipses-outline"></ion-icon>chat individual</a>
    <div class="keyApi">
    <a id="API"><ion-icon name="key-outline"></ion-icon></a>
    </div>
    <a id="error"><ion-icon name="bug-outline"></ion-icon></a>
    `; 
    homePage.querySelector("#API").addEventListener("click", () => navigateTo("/api", { }));
    homePage.querySelector("#groupal").addEventListener("click", () => navigateTo("/groupal", { }));
    homePage.querySelector("#individual").addEventListener("click", () => navigateTo("/individual", { }));
    homePage.querySelector("#error").addEventListener("click", () => navigateTo("/error", { }));

    container.append(Header(), homePage, filter(), SectionOrder(), cards(data), Footer());
    return container;
    };

 
  
  /*
  const contenedor = document.createElement("section");

    contenedor.innerHTML = `
      <h1>Titulo</h1>
      <a id="individual">Chat Individual</a>
      <a id="API">API</a>
      <a id="grupal">Chat Grupal</a>
      <a id="error">Error</a>
    `
    
    contenedor.querySelector('#individual').addEventListener("click", () => alert('GRUPAL'));
    contenedor.querySelector('#API').addEventListener("click", () => alert('API'));
    contenedor.querySelector('#grupal').addEventListener("click", () => alert('INDIVIDUAL') );
    contenedor.querySelector('#error').addEventListener("click", () => alert('ERROR') );


document.getElementById('root').appendChild(contenedor)
  */