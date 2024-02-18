import { Footer } from "../components/Footer.js";
import { Header } from "../components/Header.js";

export const IndividualChat = () => {
  const container = document.createElement("div");
  const main = document.createElement("main");
  main.innerHTML = `
  <div class="page-container">
    <div class="passport-container">
        <div class="passport">
            <div class="passport-icon"></div>
            <div class="top-flap"></div>
            <div class="bottom-flap">
                <div class="passport-header"></div>
                <div class="passport-body">
                    <div class="passport-img"></div>
                    <div class="passport-info"></div>
                </div>
                <div class="passport-footer"></div>
            </div>
        </div>
    </div>
    <div class="chat-container">
        <div class="chat-background">
            <div class="chat">
                <div class="chat-header">
                <p class="character-name">Personaje</p>
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
