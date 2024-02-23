import { navigateTo } from '../router.js';

export const Error = () => {
  const error = document.createElement('div');
  error.className = 'header';
  error.innerHTML = `
  <div>
    <div class= titulo> 
        <img src="images/robot404.jpg" class=logo-error>
        <h1>{404}</h1>
        <h2> Página no encontrada </h2>
        <button class="button-return-home">
          <img src="images/home.png" class="logo-home">
          Volver al inicio
        </button>
    </div>
  </div>
  `;
  // para el boton que retorna al inicio 
  const buttonReturnHome = error.querySelector(".button-return-home");
  buttonReturnHome.addEventListener("click", () => {
    navigateTo("/", {})
  })

  return error;
}