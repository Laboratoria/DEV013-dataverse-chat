import {Button} from "./../components/Button.js";
import { Footer } from "./../components/Footer.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import data from "./../data/dataset.js";
import { navigateTo } from "../router.js";

export const GroupalChat = () => {
  const divMain = document.createElement("div");
  const divFace = document.createElement("div");
  divFace.className = "elementFace";
  const main = document.createElement("main");
  main.innerHTML = `
  <div class="containerGroupal">
  <div class="containerGroupal__Chat">
  <div class="containeGroupal__chat__header">
  <img src="./images/avatar-group.png" alt="logoGroupal" class="imgGroupal">
        <p>CHAT GRUPAL</p>
      </div>
      <div class="containerGroupal__chat__screen"></div>
      <div class="nameIsWrite hide">esta escribiendo...</div>
      <div class="containerGroupal__chat__inputSend"> 
        <input type="text" class="inputGroupal" placeholder="Platica con nosotros"> <i class='bx bxs-send'></i>
      </div>
   </div>
  <div class="containerGroupal__Users">
    <div class="containerGroupal__Users__header">
      <p>PARTICIPANTES </p>  
      </div></div>  
  </div> `
  divFace.innerHTML = 
  `</div></div>`;
  
  //const imageFaceContainer = main.querySelector(".elementFace");
  const listUlOfFaces = document.createElement("ul")
  data.forEach((element) => {
    const listLiOfFaces = document.createElement("li");
    listLiOfFaces.innerHTML = `<img src="${element.imageUrlFace}" alt="${element.name}"></img>`
    listUlOfFaces.appendChild(listLiOfFaces);
  });
  divFace.appendChild(listUlOfFaces);

  divMain.append(Button(), main, divFace, Footer());
  //container.appendChild(main)
  const nameWrite = main.querySelector(".nameIsWrite");
  const sendButton = main.querySelector(".bxs-send");
  const inputUsers = main.querySelector(".inputGroupal"); 
  const messageContainer = main.querySelector(".containerGroupal__chat__screen");

  sendButton.addEventListener("click", () => {
    //1.Importar la data
    //2.Ejecutar la data por cada vecino
    //3.Hacer append de las respuesta 
    //NO PODEMOS PERMITIR QUE SE EJECUTE LA FUNCION SI EL INPUT ESTA VACIO
    //Overflow en el contenedor de los mensajes
      
    const userInputValue = inputUsers.value;
    const userAnswer = document.createElement("div");
    userAnswer.className = "user-txt"
    userAnswer.innerHTML = userInputValue;
    data.forEach( async (element) => {
      nameWrite.classList.remove("hide");//para esconder el esta escribien    
      nameWrite.classList.add("show" );
      const message = document.createElement("div");
      message.className = "system-txt";
      const openAiResponse = await communicateWithOpenAI(element.description, userInputValue);
      if (openAiResponse === "error") {
        navigateTo("/error");
      } else {
        message.innerHTML = openAiResponse;
      }
      messageContainer.append(message)
      nameWrite.classList.add("hide");
      nameWrite.classList.remove("show");
    })
    messageContainer.append(userAnswer)
    inputUsers.value = "";
  })

  return divMain;
};



/*

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
*/