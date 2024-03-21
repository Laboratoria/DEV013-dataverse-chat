export const ModalApi = () => {
  const modalKey = document.createElement("form");
  modalKey.setAttribute("class", "modal-key");
  modalKey.innerHTML = `
  <div class="content-modal-key" id="modal">
    <div class="modal-body-key">
      <div class="modal-header-key">
        <h3 id="title-modal">Ingresa la API Key</h3>
        <div class="modal-main-key">
          <input class="container-input"></input>
        </div>
      </div>
      <div class="modal-footer-key">
        <button type="submit" class="accept">Confirmar</button>
        <button class="cancel-modal-footer-key">Cancelar</button>
        <a class="generate-api" href="https://platform.openai.com/api-keys" target="_blank" > Si no cuentas con una API Key generalo aquí</a>
      </div>
    </div>
  </div>
  `;
  return modalKey;
};
