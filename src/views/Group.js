import {HomeIconButton} from "../components/HomeIconButton.js";

export const GroupChat = () =>  {
  const viewGroupChat = document.createElement("section");
  const main = document.createElement("main");

  viewGroupChat.innerHTML = ` <section id="chat-area" class="chat-area">
    <h1 id="title">Chat Grupal</h1>
    <div class="message-area">Zona de Mensajeria</div>
  </section>

  <section id="carrusel">
    <img src="image.png" alt="fondo-chat-grupal"/>
    <h4>Puedes iniciar tu chat con estas tematicas</h4>
    <ul>
      <li>Familia Botanica</li>
      <li>Cuidados</li>
      <li>Floracion</li>
      <li>Mantenimiento</li>
      <li>Usos</li>
    </ul>
  </section>
  `;

  viewGroupChat.append(main, HomeIconButton());
  return viewGroupChat;
}
