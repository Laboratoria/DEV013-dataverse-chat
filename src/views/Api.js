// //import { ButtonHome } from "../components/Button.js";
// //import { Footer } from "../components/Footer.js";
// //import { navigateTo } from "../router.js";
import { Button } from "../components/Button.js";
import { setApiKey, removeApiKey } from "../lib/apiKey.js";
//import { Header } from "../components/Header.js";
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
    <input type="text id="userName" class="userName" placeholder="Margarita" required>
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
    <input class="buttonApiSave show" type="submit" value="SAVE API KEY">
    <input class="buttonApiDelete hide" type="submit" value="DELETE API KEY">
  </form>
    `;
  const apiKeyInput = apiPage.querySelector("#api-key");
  const apiKeyPass = apiPage.querySelector(".api__key"); //checar, si la comento no aparece el texto
  const iconSHow = apiPage.querySelector(".bx");
  iconSHow.addEventListener("click", () => {
    if (apiKeyPass.type === "password") {
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
  const buttonDelete = apiPage.querySelector(".buttonApiDelete");
  const requiredInputName =  apiPage.querySelector(".userName");//valor obligatorio del input del nombre
  buttonSave.addEventListener("click", () => {
    if(requiredInputName.value === "" || apiKeyInput.value === ""){//SI EL VALOR DEL INPUT ES VACIO QUE NO SE ESCONDA EL BOTÓN DEL SAVE Y SE AGREGUE LA CLASE BORDERCOLOR QU PONE ROJO EL INPUT
      requiredInputName.classList.add("borderColor");
      apiKeyInput.classList.add("borderColor");
      //alert("Campos obligatorios");
    } 
    else if(apiKeyInput.value > 5) {//SI EL INPUT ES MAYOR A 4 LETRAS
      alert("adios");
    }
    buttonDelete.classList.remove("hide");
    buttonDelete.classList.add("show");
    buttonSave.classList.remove("show");
    buttonSave.classList.add("hide");
    setApiKey(apiKeyInput.value);
  });
  buttonDelete.addEventListener("click", () => {
    buttonSave.classList.remove("hide");
    buttonSave.classList.add("show");
    buttonDelete.classList.remove("show");
    buttonDelete.classList.add("hide");
    removeApiKey();
  });
  container.append(Button("CERRAR"), apiPage);
  // container.append(apiPage);
  return container;
};

/* const apiKeyUser = apiPage.querySelector(".userName");
  apiKeyUser.addEventListener("keydown", () => {console.log("hola");})
  const save = Header(apiKeyUser.value);
  console.log(save); */

/*
  const buttonSave = apiPage.querySelector(".buttonApiSave");
  const buttonDelete = apiPage.querySelector(".buttonApiDelete");
  // const requiredInputName =  apiPage.querySelector(".userName");
  buttonSave.addEventListener("click", () => {
    buttonDelete.classList.remove("hide");
    buttonDelete.classList.add("show");
    buttonSave.classList.remove("show");
    buttonSave.classList.add("hide");
    setApiKey(apiKeyInput.value);
  });
  buttonDelete.addEventListener("click", () => {
    buttonSave.classList.remove("hide");
    buttonSave.classList.add("show");
    buttonDelete.classList.remove("show");
    buttonDelete.classList.add("hide");
    removeApiKey();
  });
  container.append(Button("CERRAR"), apiPage);
  return container;
  */