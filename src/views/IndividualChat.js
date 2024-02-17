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
                <div class="chat-header"></div>
                <div class="chat-body"></div>
                <div class="chat-footer"></div>
            </div>
        </div>
    </div>
  </div>
  `;

  container.append(Header(), main, Footer());

  return container;
};
