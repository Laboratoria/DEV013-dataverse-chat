//PANTALLA PRINCIPAL
import { navigateTo } from '../router.js';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { cards } from '../components/Cards.js'; 
import data from '../data/dataset.js';

  export const home = () => {
    const container = document.createElement("div");
    const homePage = document.createElement("main");
  //   const listUl = document.createElement("ul");
  //   data.forEach(element => {
  //     console.log({element})
  //     const listLi = document.createElement('li');
  //     listLi.setAttribute("class", `card ${element.personality} ${element.gender} ${element.facts.zodiacSign} `);//css
  //     listLi.setAttribute("itemscope", "");
  //     listLi.setAttribute("itemtype", "http://schema.org/Person");
  //     listLi.innerHTML = `
  //       <dl>
  //       <img class="img" src=${element.imageUrl} alt=${element.name}/>
  //       <dt>Nombre:</dt><dd itemprop="name">${element.name}</dd>
  //       <div class="details">
  //       <dt>Especies:</dt><dd itemprop="species">${element.species}</dd>
  //       <dt>Genero:</dt><dd itemprop="gender" hidden>${element.gender}</dd>
  //       </div>
  //       <dt>Personalidad:</dt><dd itemprop="personality">${element.personality}</dd>
  //       <dt>Signo zodiacal:</dt><dd itemprop="zodiacSign" hidden>${element.facts.zodiacSign}</dd>
  //       <dt>Cumpleaños:</dt><dd itemprop="birthDate">${element.facts.birthDate}</dd>
  //       <dt>Descripción:</dt><dd itemprop="shortDescription" hidden>${element.shortDescription}</dd>
  //       <div>
  //         <button id="seeMoreModal"> Ver mas... </button>
  //       </div>
  //       </dl>`
  //       //console.log(listUl)
  //     listUl.appendChild(listLi);
  //   });

    homePage.innerHTML = `
    <a id="starting">Inicio</a> <br/>
    <a id="groupal"><ion-icon name="logo-wechat"></ion-icon>Chat Grupal</a> <br/>
    <a id="individual"><ion-icon name="chatbubble-ellipses-outline"></ion-icon>chat individual</a> <br/>
    <a id="API"><ion-icon name="key-outline"></ion-icon></a> <br/>
    <a id="error"><ion-icon name="bug-outline"></ion-icon></a> <br/>
    `; 

    homePage.querySelector("#API").addEventListener("click", () => navigateTo("/api", { }));
    homePage.querySelector("#starting").addEventListener("click", () => navigateTo("/startingScreen", { }));
    homePage.querySelector("#groupal").addEventListener("click", () => navigateTo("/groupal", { }));
    homePage.querySelector("#individual").addEventListener("click", () => navigateTo("/individual", { }));
    homePage.querySelector("#error").addEventListener("click", () => navigateTo("/error", { }));
    // linkGrupal.addEventListener("click", () => navigateTo("/groupal", { }) );

    container.append(Header(), homePage, cards(data), Footer());
    // container.appendChild(listUl);
    return container;
    };


  //  <img src="./images/error/error1.jpg" alt="error 404"/>


  /*
    const titulo = document.createElement("p");
    const linkIndividual = document.createElement("a");
    const linkAPI = document.createElement("a");
    const linkGrupal = document.createElement("a");
    const linkError = document.createElement("a");
    linkIndividual.innerText = "Chat Individual";
    linkAPI.innerText = "API";
    linkGrupal.innerText = "Chat Grupal";
    linkError.innerText =  "Error";
    titulo.innerHTML = `
    <h1>TITULO</h1>
    `  
    linkGrupal.addEventListener("click", () => navigateTo("/groupal", { }) );
    linkAPI.addEventListener("click", () => navigateTo("/api", { }) );
    linkIndividual.addEventListener("click", () => navigateTo("/individual", { }) );
    linkError.addEventListener("click", () => navigateTo("/error", { }) );
    titulo.appendChild(linkAPI);
    titulo.appendChild(linkError);
    titulo.appendChild(linkGrupal);
    titulo.appendChild(linkIndividual);

    return titulo; 
}*/
  
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