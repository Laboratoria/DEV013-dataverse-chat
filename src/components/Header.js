import { ButtonHome } from "./Button.js";
export const Header = () => {
    const header = document.createElement("header");
    header.innerHTML = `
      <div class="header-title">
        <img src="./images/Logo.png" alt="Logo" />
        <h1>WikiNook</h1>
      </div>
      <div class="header-user">
        <img src="./images/User.png" alt="User" />
        Usuario
      </div>
    `;
    header.appendChild(ButtonHome());
    return header;
}