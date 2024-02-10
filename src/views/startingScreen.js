//pantalla 
const startingScreen = (data) => {
    const titulo = document.createElement("p");
    titulo.innerHTML = "BIENVENIDO";
    return titulo;
    /*
const header = document.createElement("header");
header.innerHTML = `
<div class="header-title">
<img src="./images/wikinook.png" alt="starting"/>
<button type="button">INICIO</button> `;
divRoot.before(header); //antes del div root 
*/
};
export default startingScreen;