import { Footer } from "../components/Footer.js";
import { Header } from "../components/Header.js";
import { navigateTo } from "../router.js";
import data from "./../data/dataset.js";
import { communicateWithOpenAI } from "./../lib/openAIApi.js";
/// /import { filterData } from "../lib/dataFunctions.js";
//HAY QUE USAR EL ID
export const IndividualChat = (element) => {
  // const nameElement = filterData(data, "name", ("name").value)
  const idFilter = data.filter((item) => item["id"] === element.id);
  const container = document.createElement("div");
  const main = document.createElement("main");
  main.innerHTML = `
  <div class="page-container">
    <div class="passport-container">
        <div class="passport">
            <div class="passport-icon"></div>
            <div class="top-flap"><img src="../images/chat-and-passport/top-flap.png" alt="top-flap" /></div>
            <div class="bottom-flap">
                <div class="passport-header">
                <div class="passport-title-line"></div>
                <div class="passport-text"><p>PASSPORT</p></div>
                <div class="passport-title-line"></div>
        </div>
                <div class="passport-body">
                    <div class="passport-img"><img src=${idFilter[0].imageUrlFace} alt=${idFilter[0].name}></div>
                    <div class="passport-info">
                <div class="catchphrase-container">
                    <p>${idFilter[0].facts.catchPhrase}</p>
                </div>
                <div class="personal-info-container">
                    <div>
                        <img src="../images/chat-and-passport/passport-personality/${idFilter[0].personality}.png" alt="personality">
                        <p>${idFilter[0].personality}</p>
                    </div>
                    <div>
                        <img src="../images/chat-and-passport/passport-zodiac/${idFilter[0].facts.zodiacSign}.png" alt="animal">
                        <p>${idFilter[0].facts.zodiacSign}</p>
                    </div>
                    <div>
                        <img src="../images/Pastel de cumple.png" alt="cake">
                        <p>Cumpleaños ${idFilter[0].facts.birthDate}</p>
                    </div>
                </div>
            </div>
        </div>
<div class="passport-footer"></div>
    </div>
</div>
    </div>
    <div class="chat-container">
        <div class="chat-background">
            <div class="chat">
                <div class="chat-header">
                <p class="character-name">${idFilter[0].name}</p>
                <p class="last-seen">Visto por últ. vez ${new Date().toISOString().split('T')[1].split(':').slice(0,2).join(':')}</p>
                </div>
                <div class="chat-body">
                </div>
                <div class="chat-footer">
                <div class="nameIsWrite hide">
                    <div>
                        ${idFilter[0].name} esta escribiendo
                        <svg height="20" width="40" class="loader">
                            <circle class="dot" cx="10" cy="10" r="3" style="fill:grey;" />
                            <circle class="dot" cx="20" cy="10" r="3" style="fill:grey;" />
                            <circle class="dot" cx="30" cy="10" r="3" style="fill:grey;" />
                        </svg>
                    </div>
                </div>
                    <div class="chat-placeholder">
                        <div><i id="pencil-icon"class="fa-solid fa-pencil"></i></div>
                        <input type="text" class="send-txt" placeholder="Escribe un mensaje...">
                        <div><button id="send-icon"><i class="fa-regular fa-paper-plane"></i></button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>`;

  container.append(Header(), main, Footer());
  const nameWrite = main.querySelector(".nameIsWrite");
  const userInput = main.querySelector(".send-txt");
  const sendButton = main.querySelector("#send-icon");
  const messageWindows = main.querySelector(".chat-body");

  const sendMessageFunction = async () => {
    nameWrite.classList.remove("hide"); //para esconder el esta escribien
    nameWrite.classList.add("show");
    const userInputValue = userInput.value;

    const questionUser = document.createElement('div')
    questionUser.className = "user-txt-container"
    questionUser.innerHTML = `<div class="user-txt">${userInputValue}</div>`

    const message = document.createElement("div");
    message.className = "system-txt-container"
    
    const openAiResponse = await communicateWithOpenAI(
      idFilter[0].description,
      userInputValue
    );
    if (openAiResponse === "error") {
      navigateTo("/error");
    } else {
      message.innerHTML = `
        <img src=${idFilter[0].imageUrlFace} alt=${idFilter[0].name}>
        <div class="system-txt">${openAiResponse}</div>
    `
    }
    //message.innerHTML = openAiResponse.data.choices[0].message.content;
    nameWrite.classList.add("hide");
    nameWrite.classList.remove("show");
    //Vamos a introducir los mensajes cuando la función communicate retorne
    messageWindows.append(questionUser, message);
    userInput.value = "";
  }

  sendButton.addEventListener("click", sendMessageFunction);
  userInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && userInput.value !== "") {
      sendMessageFunction();
    }
  })


  return container;
};



// <img src="../images/chat-and-passport/bottom-flap.png" alt="bottom-flap">
// data/choices[0]/message/content