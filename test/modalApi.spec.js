import { ModalApi } from "../src/Components/ModalApi.js";

//agrupamos las pruebas con describe para el componente ModalApi
describe("Componente ModalApi", () => {
  it("Existe el componente ModalApi", () => {
    const modalApi = ModalApi();
    // aqui afirmamos que modalApi es verdadero (si esta en la pagina)
    // asegurarnos de que exista y no sea false, null, undefined
    expect(modalApi).toBeTruthy();
  });

  it("el contenido de ModalApi no está vacío", () => {
    const modalApi = ModalApi();
    // traemos con queryselector todos los elementos
    // const modalBodyKey = modalApi.querySelector('.modal-body-key')
    // const modalHeaderKey = modalApi.querySelector('.modal-header-key')
    const tittleModal = modalApi.querySelector('#title-modal')
    // const modalMainKey = modalApi.querySelector('.modal-main-key')
    // const containerInput = modalApi.querySelector('.container-input')
    const cancelModalFooterKey = modalApi.querySelector('.cancel-modal-footer-key')
    const accept = modalApi.querySelector('.accept')
    // const modalFooterKey = modalApi.querySelector('.modal-footer-key')
    const generateApi = modalApi.querySelector('.generate-api')
    
    //eslint-disable-next-line no-console
    console.log(tittleModal,cancelModalFooterKey,accept,generateApi);

  })

});

// <div class="modal-body-key">
//     <div class="modal-header-key">
//       <h3 id="title-modal"> Ingresa la API Key </h3>
//     </div>  
//     <div class="modal-main-key">
//       <input class="container-input"></input>
//       <button class="cancel-modal-footer-key">Cancelar</button>
//       <button type="submit" class="accept">Confirmar</button>
//     </div>
//     <div class="modal-footer-key">
//       <a class="generate-api" href="https://platform.openai.com/api-keys" target="_blank" > Si no cuentas con una API Key generalo aquí</a>
//     </div>
//   </div>`;