import {Button} from "./../components/Button.js";
import { Footer } from "./../components/Footer.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import data from "./../data/dataset.js";
//import { navigateTo } from "../router.js";

export const GroupalChat = () => {
  const divMain = document.createElement("div");
  const main = document.createElement("main");
  const divImageFaces = document.createElement("div");
  data.forEach((element) => {
    const imageFaces = document.createElement("img");
    imageFaces.setAttribute("src", element.imageUrlFace); 
    imageFaces.setAttribute("alt",  element.name);
    divImageFaces.appendChild(imageFaces); 
  }); 
  main.innerHTML = `
  <div class="containerGroupal">
  <div class="containerGroupal__Chat">
  <div class="containeGroupal__chat__header">
        <p class="page">CHAT GRUPAL</p>
      </div>
      <div class="containerGroupal__chat__screen">
      <div class="nameIsWriteGroupal hide ">Estan escribiendo
      <svg height="20" width="40" class="loader">
          <circle class="dot" cx="10" cy="10" r="3" style="fill:grey;" />
           <circle class="dot" cx="20" cy="10" r="3" style="fill:grey;" />
          <circle class="dot" cx="30" cy="10" r="3" style="fill:grey;" />
      </svg>
      </div>
      <div class="containerGroupal__chat__inputSend"> 
        <input type="text" class="inputGroupal" placeholder="Platica con nosotros"> <i class='bx bxs-send'></i>
      </div>
      </div>
   </div>
  <div class="containerGroupal__Users">
    <div class="containerGroupal__Users__header">
      <p>PARTICIPANTES </p>
    </div> ${divImageFaces.innerHTML}</div>
  </div> `;

  divMain.append(Button(), main, Footer());
  //container.appendChild(main)
  const nameWrite = main.querySelector(".nameIsWriteGroupal");
  const sendButton = main.querySelector(".bxs-send");
  const inputUsers = main.querySelector(".inputGroupal"); 
  const messageContainer = main.querySelector(".containerGroupal__chat__screen");

  sendButton.addEventListener("click", () => {      
    const userInputValue = inputUsers.value;
    const userAnswer = document.createElement("div");
    userAnswer.className = "user-txt-container user-txt";
    userAnswer.innerHTML = userInputValue;

    // for (const element of data) {
      
    // }
    
    data.forEach( async (element) => {
      nameWrite.classList.remove("hide");//para esconder el esta escribiendo    
      nameWrite.classList.add("show" );
      const message = document.createElement("div");
      message.className = "system-txt-container";

      
      //const openAiResponse = setTimeout(await communicateWithOpenAI(element.description, userInputValue), 2000)
      const openAiResponse = await communicateWithOpenAI(element.description, userInputValue);
      //await new Promise(resolve => setTimeout(resolve, 2000));
      //setTimeout(openAiResponse, 1000);      

      // if (openAiResponse === "error") {
      //   navigateTo("/error");
      // } else {
      //message.innerHTML = openAiResponse;
      //}
      message.innerHTML = `
        <img class="face" src=${element.imageUrlFace} alt=${element.name}>
        <div class="system-txt systemTop">${openAiResponse}</div>`
      messageContainer.append(message);
      nameWrite.classList.add("hide");
      nameWrite.classList.remove("show");
    })
    messageContainer.append(userAnswer)
    inputUsers.value = "";
  })

  return divMain;
};


//setTimeout(funcion y tiempo)

/*


*/