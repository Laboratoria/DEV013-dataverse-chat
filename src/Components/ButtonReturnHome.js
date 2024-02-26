import { navigateTo } from "../router.js";

export const ButtonReturnHome = () => {
    const buttonReturnHome = document.createElement("div");
    buttonReturnHome.setAttribute("class", "buttonReturnHome");
  
    buttonReturnHome.innerHTML = `
    <button class="button-return-home">
        <img src="images/home.png" class="logo-home">
        Pagina principal
    </button>
    `;
    // para volver a la pagina principal
    const returnHome = buttonsContainer.querySelector(".button-return-home");
    returnHome.addEventListener("click", () => {
      navigateTo("/", {})
    })
    return buttonReturnHome;
}
