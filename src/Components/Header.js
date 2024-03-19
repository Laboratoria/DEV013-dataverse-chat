export const Header = () => {
  const header = document.createElement("header");
  header.setAttribute("class", "header");
  header.innerHTML = ` 
  <div id= "container-left"> 
    <img src="images/news.gif" class= "logo-header">
    <h1 class= "title-kdrama">K-DRAMA <span class= "title-verse">VERSE</span></h1>
  </div>
  
  <div id="container-right">  
    <button class="button-group-chat">
    <img src="images/group.png" class="logo-group-chat">
    Chat Grupal
    </button>
    
    <button class="button-appi-key">Api Key</button>
  </div>
  `;
  return header;
};
