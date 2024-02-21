import { navigateTo } from '../router.js';
import { Button } from './Button.js'

export const Header = () => {
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
            <li><a id="api">Sobre Nosotros</a></li>
          </ul>
      </nav>
     
        <div class="header-user">
          <img src="./images/User.png" alt="User" />
          Usuario
        </div>
    `;
    header.querySelector("#home").addEventListener("click", () => navigateTo("/home", { }));
    // header.querySelector("#api").addEventListener("click", () => navigateTo("/api", { }));
    header.querySelector("#groupal").addEventListener("click", () => navigateTo("/groupal", { }));
    // header.querySelector("#individual").addEventListener("click", () => navigateTo("/individual", { }));
    header.querySelector("#stats").addEventListener("click", () => navigateTo("/stats", { }));

    return header;
}




