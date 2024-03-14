import { navigateTo } from "../router.js";

export const Error = () => {
  const error = document.createElement("div");
  error.className = "error";
  error.innerHTML = `
  <div class="error-container">
    <div class= titulo> 
        <img src="images/robot404.jpg" class=logo-error>
        <p class="error-title">{404}</p>
        <p class="error-title"> Página no encontrada </p>
    </div>
    <div>
      <button class="button-return-home error">
        <img src="images/home.png" class="logo-home">
        Volver al Inicio
      </button>
    </div>
  `;
  //para el boton que retorna al inicio
  const buttonReturnHome = error.querySelector(".button-return-home");
  buttonReturnHome.addEventListener("click", () => {
    navigateTo("/", {});
  });

  return error;
};
