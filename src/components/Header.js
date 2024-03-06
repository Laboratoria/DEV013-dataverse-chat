//import { navigateTo } from '../router.js';
// import { Button } from './Button.js'
//import { Api } from '../views/Api.js';

/*export const Header = () => {
    const header = document.createElement("header");
    header.innerHTML = `
    <nav>
      <div class="header-title">
        <img src="./images/Logo.png" alt="Logo"/>
        <h1>WikiNook</h1>
        </div>
          <ul class="nav-ul">
            <li><a id="home">Inicio</a></li>
            <li><a id="groupal">Chat Grupal</a></li>
            <li><a id="stats">Estadisticas</a></li>
            <li><a id="api" class="keyApi">Sobre Nosotros</a></li>
          </ul>
      </nav>
     
        <div class="header-user">
          <img src="./images/User.png" alt="User" />
          Usuario
        </div>
    `;
  header.querySelector("#home").addEventListener("click", () => navigateTo("/home", { }));
  header.querySelector("#api").addEventListener("click", () => navigateTo("/api", { }));
  header.querySelector("#groupal").addEventListener("click", () => navigateTo("/groupal", { }));
  header.querySelector("#individual").addEventListener("click", () => navigateTo("/individual", { }));
  header.querySelector("#stats").addEventListener("click", () => navigateTo("/stats", { }));
  return header;
}
*/

import { navigateTo } from "../router.js";
import { getUserName } from "../lib/apiKey.js";
// const name = getuserName()

export const Header = () => {
  const userName = getUserName();
  const header = document.createElement("header");
  header.innerHTML = `
  <div class="header-title">
    <img src="./images/Logo.png" alt="Logo" />
      <h1>WikiNook</h1>
  </div>
  <nav>
    <ul class="nav-ul">
      <li><a id="home">Home</a></li>
      <li><a id="stats">Estadisticas</a></li>
      <li><a id="about-us">Saber Más</a></li>
    </ul>
    <div>
      <div class="header-user ${userName === null ? "hide" : "show"}"> 
      <img src="./images/User.png" alt="User" />
      <p id="userName">${userName}</p>
      </div>
      <div>
      <button class="btn-header ${userName === null ? "show" : "hide"}" id="api"> API KEY </button>
      </div>
    </div>
    </nav>`;
  
  const headerUser = header.querySelector(".header-user");
  //const btnHeader = header.querySelector(".btn-header");

  headerUser.addEventListener("click", () => navigateTo("/api"));

  header
    .querySelector("#home")
    .addEventListener("click", () => navigateTo("/home", {}));
  //header.querySelector("#individual").addEventListener("click", () => navigateTo("/individual", { name: "sldjf"}));
  header
    .querySelector("#api")
    .addEventListener("click", () => navigateTo("/api", {}));
  header
    .querySelector("#stats")
    .addEventListener("click", () => navigateTo("/stats", {}));
  header
    .querySelector(".header-title")
    .addEventListener("click", () => navigateTo("/home"));
  header
    .querySelector("#about-us")
    .addEventListener("click", () => navigateTo("/error"));
  return header;
};

// <div class="header-user">
//   <img src="./images/User.png" alt="User" />
//       ${name}
// </div>
