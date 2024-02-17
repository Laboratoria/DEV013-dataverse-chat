import { navigateTo } from '../router.js';

export const Header = () => {
    const header = document.createElement("header");
    header.innerHTML = `
      <div class="header-title">
        <img src="./images/Logo.png" alt="Logo" />
        <h1>WikiNook</h1>
      </div>
      <nav>
        <ul class="nav-ul">
          <li><a id="home">Home</a></li>
          <li><a id="groupal">Chat Grupal</a></li>
          <li><a id="individual">Chat individual</a></li>
          <li><a id="api">API</a></li>
          <li><a id="stats">Estadisticas</a></li>
        </ul>
        <div class="header-user">
          <img src="./images/User.png" alt="User" />
          Usuario
        </div>
      </nav>
    `;
    header.querySelector("#home").addEventListener("click", () => navigateTo("/home", { }));
    header.querySelector("#api").addEventListener("click", () => navigateTo("/api", { }));
    header.querySelector("#groupal").addEventListener("click", () => navigateTo("/groupal", { }));
    header.querySelector("#individual").addEventListener("click", () => navigateTo("/individual", { }));
    header.querySelector("#stats").addEventListener("click", () => navigateTo("/stats", { }));

    return header;
}