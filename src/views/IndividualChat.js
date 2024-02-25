import { Footer } from "../components/Footer.js";
import { Header } from "../components/Header.js";
import data from "./../data/dataset.js";
/// /import { filterData } from "../lib/dataFunctions.js";

//HAY QUE USAR EL ID

export const IndividualChat = (element) => {
  // const nameElement = filterData(data, "name", ("name").value)
  // console.log("nombre", nameElement)
  const idFilter = data.filter((item) => item["id"] === element.id);
  console.log("Este es nuestro idFilter", idFilter);
  console.log(element, "eleme");
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
                        <p>${idFilter[0].facts.birthDate}</p>
                    </div>
                    <div>
                        <p>${idFilter[0].species}</p>
                    </div>
                    <div>
                        <p>${idFilter[0].personality}</p>
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
                <p class="last-seen">Visto por últ. vez 00:00</p>
                </div>
                <div class="chat-body"></div>
                <div class="chat-footer">

                    <div class="chat-placeholder">
                        <div><i id="pencil-icon"class="fa-solid fa-pencil"></i></div>
                        <input type="text" class="send-txt" placeholder="Escribe un mensaje...">
                        <div><button id="send-icon"><i class="fa-regular fa-paper-plane"></i></button></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  </div>
  `;

  container.append(Header(), main, Footer());

  return container;
};

// <img src="../images/chat-and-passport/bottom-flap.png" alt="bottom-flap">
