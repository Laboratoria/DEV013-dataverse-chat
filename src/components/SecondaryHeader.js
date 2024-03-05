// import { navigateTo } from '../router.js';

export const SecondaryHeader = () => {
  const header = document.createElement("header");
  header.innerHTML = `
  <div class="header-title">
    <img src="./images/Logo.png" alt="Logo" />
      <h1>WikiNook</h1>
  </div>
    <div>
    <button class="btn-header">??</button>
    </div>
    </nav>
    `;
}