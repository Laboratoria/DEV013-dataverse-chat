export const ModalApi = () => {
  // const modalKey = document.createElement("form");
  // const title = document.createElement("h3");
  // const input = document.createElement("div");
  // const content = document.createElement("a");
  // const buttonContainer = document.createElement("div");

  // modalKey.setAttribute("class", "modal-key");
  // title.setAttribute("class", "title-modal");
  // input.setAttribute("class", "container-input");
  // content.setAttribute("target", "_blank");
  // content.setAttribute("class", "generateApi");
  // content.setAttribute("href", "https://platform.openai.com/api-keys");
  // buttonContainer.setAttribute("class", "button-container");

  // title.textContent = `Ingresa la API Key`;
  // content.textContent = `Si no cuentas con una API Key generalo aquí.`;
  // buttonContainer.innerHTML = `<button type="submit" class="cancel">Cancelar</button>
  //                                 <button class="accept">Confirmar</button>`;
  // modalKey.append(title, buttonContainer, input, content, buttonContainer);

  const modalKey = document.createElement("div");
  modalKey.setAttribute("class", "modal-key");
  modalKey.innerHTML = `
  <div class="modal-body-key">
    <div class="modal-header-key">
      <h3 id="title-modal"> Ingresa la API Key </h3>
    </div>  
    <div class="modal-main-key">
      <input class="container-input"></input>
      <button type="submit" class="cancel-modal-footer-key">Cancelar</button>
      <button class="accept">Confirmar</button>
    </div>
    <div class="modal-footer-key">
      <a class="generate-api" href="https://platform.openai.com/api-keys" target="_blank" > Si no cuentas con una API Key generalo aquí</a>
    </div>
  </div>`
  return modalKey;
};