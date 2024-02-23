import { navigateTo } from '../router.js';
import { Header } from './../Components/Header.js'

export const ApiKey = () => {
  const viewApiKey = document.createElement('section')
  const apikey = document.createElement('div');

  viewApiKey.setAttribute("class", "viewApiKey")
  apikey.setAttribute("class", "apikey")

  apikey.innerHTML = `
  <div class= "container-apikey" >
    <p>Ingresa tu API Key</p>
    <img src="images/key.png" class="logo-apikey">
    <input type="=text-apikey">
    <button class="button-confirm">Confirmar</button>
    <button class="button-cancel">Cancelar</button>
  </div>
  `;

  const buttonConfirm = apikey.querySelector(".button-confirm");
  buttonConfirm.addEventListener("click", () => {
    navigateTo("/chatindividual", {})
  })

  const buttonCancel = apikey.querySelector(".button-cancel");
  buttonCancel.addEventListener("click", () => {
    navigateTo("/detailcard", {})
  })

  viewApiKey.appendChild(Header())
  viewApiKey.appendChild(apikey)

  return viewApiKey;

}