//import { Footer } from "../components/Footer.js";

export const GroupalChat = () => {
  const container = document.createElement("div");
  const main = document.createElement("main");
  main.innerHTML = `
  <div>
  <div class="containerGroupal">
    <div class="containeGroupal__header">
      <p>CHAT GRUPAL</p>
    </div>
    <div class="containerGroupal__screen">
    </div>
    <div class="containerGroupal__inputSend"> 
    <input type="text"> <i class='bx bxs-send'></i>
    </div>
  </div>
  <div class="containerUsers">
  <p>PARTICIPANTES</p>
  </div>
  </div>
  `;

  return main; 
}
