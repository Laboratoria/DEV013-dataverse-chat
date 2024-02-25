import { navigateTo } from "../router.js";

export const GroupalChat = () => {
  // const container = document.createElement("div");
  const main = document.createElement("main");
  main.innerHTML = `
  <div class="closeGroupal"><ion-icon name="close-circle-outline"></ion-icon></div>
  <div class="containerGroupal">
    <div class="containerGroupal__Chat">
      <div class="containeGroupal__chat__header">
        <img src="./images/avatar-group.png" alt="logoGroupal" class="imgGroupal">
        <p>CHAT GRUPAL</p>
      </div>
      <div class="containerGroupal__chat__screen"></div>
      <div class="containerGroupal__chat__inputSend"> 
        <input type="text" class="inputGroupal" placeholder="Cuéntame un poco de ti"> <i class='bx bxs-send'></i>
      </div>
   </div>
  <div class="containerGroupal__Users">
    <div class="containerGroupal__Users__header">
      <p>PARTICIPANTES</p>
    </div>
    <img src="./images/face/bree.png" alt="faceBree">
    <img src="./images/face/apolo.png" alt="faceApolo">
    <img src="./images/face/leo.png" alt="faceLeo">
    <img src="./images/face/sally.png" alt="faceSally">
    <img src="./images/face/bones.png" alt="faceBones">
    <img src="./images/face/biskit.png" alt="faceBiskit">
    <img src="./images/face/fauna.png" alt="faceFauna">
    <img src="./images/face/auri.png" alt="faceAuri">
    <img src="./images/face/pit.png" alt="facePit">
    <img src="./images/face/claudia.png" alt="faceClaudia">
    <img src="./images/face/yuki.png" alt="faceYuki">
    <img src="./images/face/narciso.png" alt="faceNarciso">
    <img src="./images/face/ken.png" alt="faceKen">
    <img src="./images/face/deira.png" alt="faceDeira">
    <img src="./images/face/bea.png" alt="faceBea">
    <img src="./images/face/wolf.png" alt="faceWolf">
    <img src="./images/face/jereza.png" alt="faceJereza">
    <img src="./images/face/rolf.png" alt="faceRolf">
    <img src="./images/face/rod.png" alt="faceRod">
    <img src="./images/face/rizzo.png" alt="faceRizzo">
    </div>
  </div> `;
  main
    .querySelector('[name="close-circle-outline"]')
    .addEventListener("click", () => {
      navigateTo("/home", {});
    });
  //container.appendChild(main)
  return main;
};
