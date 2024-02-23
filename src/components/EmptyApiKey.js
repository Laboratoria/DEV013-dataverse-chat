//import { navigateTo } from "../router.js";

export default function EmptyApiKey() {
  const viewModal = document.createElement("dialog");
  viewModal.innerHTML += `
  <h1>404</h1>
  <p>
    Para esta zona del jardín <br />
    ingresa tu llave
  </p>
  <form method="dialog">
    <input type="text" required placeholder="Apikey..." /><br />
    <button>Enviar</button>
  </form>
    `;

  return viewModal;
}
