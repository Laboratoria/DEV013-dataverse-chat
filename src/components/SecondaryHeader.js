import { Button } from "../components/Button.js";

export const SecondaryHeader = () => {
  const header = document.createElement("header");
  header.className = "secundary-header"
  header.innerHTML = `
  <div class="header-title">
    <img src="./images/Logo.png" alt="Logo" />
      <h1>WikiNook</h1>
  </div>
    `;
  header.appendChild(Button());
  return header;
};
