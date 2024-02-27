import { navigateTo } from "../router.js";

export default function IndividualChat(props) {
  const viewIndividualChat = document.createElement("div");

  viewIndividualChat.innerHTML += `
    <div id=chat-container>
      <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true">
      <h1>Plant Name</h1>
      <p>Lorem Ipsum es simplemente el texto de relleno<br/>
      de las imprentas y archivos de texto.</p>
      <div class="plant-message">
        <img src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/Ornamentales.png?raw=true" alt="Avatar" style="height:20px;width:20px";>
        <p>Hi user name. I'm plant name<br/>
        Would you like to ask me something?
        </p>
      </div>
      <div class="plant-message">
        <p>Hi plant, I want to know how much water you need</p>
      </div>
      <textarea placeholder="..." name="user-name" required></textarea>
      <button type="submit" class="btn">Send</button>
    </div>
  `;

  //   const groupButton = document.createElement("button");
  //   viewIndividualChat.appendChild(groupButton);
  //   const textButton = document.createTextNode("Go group chat");
  //   groupButton.appendChild(textButton);

  //   groupButton.addEventListener("click", () => navigateTo("/Group", props));

  //   return viewIndividualChat;
  // }

  return viewIndividualChat;
}
