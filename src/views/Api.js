// //import { ButtonHome } from "../components/Button.js";
// //import { Footer } from "../components/Footer.js";
// //import { navigateTo } from "../router.js";
import { Button } from "../components/Button.js";
export const Api = () => {
  const container = document.createElement("div");
  const apiPage = document.createElement("main");
  apiPage.innerHTML = `
  <form>
    <div class="header-title headerApiKey">
      <img src="./images/Logo.png" alt="Logo" />
      <h1>WikiNook</h1>
    </div>
    <div class="container__ApiUser">
    <label for="userName">USUARIO </label>
    <div class="container__ApiUser__text">
    <input type="text id="userName" class="userName" placeholder="Margarita">
    </div>
    </div>
    <div class="container__keyApi">
    <label for="api-key">CLAVE API </label>
    <div class="container__keyApi__hidden">
    <input type="password" id="api-key" class="api__key" placeholder="sk-4Ktb2qBVRLb.........QVm">
    <i class='bx bx-show'></i> 
    </div>
    <p class="textKeyApi">¿Qué es una llave API? <a href="https://aws.amazon.com/es/what-is/api-key/" target="_blank"> Información</a> ¿No cuentas con tu API? Puedes generarla <a href="https://platform.openai.com/api-keys" target="_blank">aquí</a><p>
    </div>
    <button type="button" class="buttonApiSave show"> SAVE API KEY</button>
    <button type="button" class="buttonApiDelete hide"> DELETE </button>
  </from>
    `;
  const apiKeyPass= apiPage.querySelector(".api__key");
  const iconSHow = apiPage.querySelector(".bx");
  iconSHow.addEventListener("click", ()=> {
    if(apiKeyPass.type == "password"){
      apiKeyPass.type = "text";
      iconSHow.classList.remove("bx-show");
      iconSHow.classList.add("bx-hide");
    } else {
      apiKeyPass.type = "password";
      iconSHow.classList.add("bx-hide");
      iconSHow.classList.remove("bx-show");
    }
  });
    const buttonSave = apiPage.querySelector(".buttonApiSave");
    const buttonDelete = apiPage.querySelector(".buttonApiDelete")
    buttonSave.addEventListener("click", () => {
        buttonDelete.classList.remove("hide");
        buttonDelete.classList.add("show");
        buttonSave.classList.remove("show");
        buttonSave.classList.add("hide");
        localStorage.setItem("miGato", "Juan");
      } );
    buttonDelete.addEventListener("click", () =>{
      buttonSave.classList.remove("hide");
      buttonSave.classList.add("show");
      buttonDelete.classList.remove("show");
      buttonDelete.classList.add("hide");
      localStorage.removeItem("miGato", "Juan");

    } );
    //buttonDelete.addEventListener("click", () => {navigateTo("/home", {})});
    //buttonSave.addEventListener("click", () => {navigateTo("/individual", {})});
    container.append(Button(), apiPage);
    // container.append(apiPage);
    return container;
  }