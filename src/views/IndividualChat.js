import { Footer } from "../components/Footer.js";
import { Header } from "../components/Header.js";

export const IndividualChat = () => {
  const container = document.createElement("div");
  const main = document.createElement("main");
  main.innerHTML = `
    <h2>Chat individual</h2>
    <div class="chat-container">
   <div class="passport-wrapper">
    <div class="passport-background">
      <div class="upper-flap">
        <div class="passport-icon"></div>
      </div>
      <div class="lower-flap">
        <div class="flap-header"></div>
        <div class="flap-body">
          <div class="passport-image"></div>
          <div class="passport-info"></div>
        </div>
        <div class="flap-footer"></div>
      </div>
    </div>
  </div>
  <div class="chat-wrapper">
    <div class="chat-background">
      <div class="chat-content">
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
