import { navigateTo } from '../router.js';

export const Error = () => {
  const error = document.createElement('div');
  error.className = 'error';
  error.innerHTML = `
    <div class= "container-error"> 
        <img src="images/robot404.jpg" class=logo-error>
        <h1>{404}</h1>
        <h2> Página no encontrada </h2>
    </div>
    
    <button class="button-return-home2">
    <img src="images/home.png" class="logo-home">
    Página principal
    </button>
  `;
  // para el boton que retorna al inicio 
  const buttonReturnHome = error.querySelector(".button-return-home2");
  buttonReturnHome.addEventListener("click", () => {
    navigateTo("/", {})
  })

  return error;
}