/*const Example = () => {

};

export default Example;*/

//const renderItems = (data) => {//ejemplo de lo que se va a mostrar
    /*const divRoot = document.querySelector("#root");
    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
    const listUl = document.createElement("ul");
    header.innerHTML = `
    <div class="header-title">
    <img src="./images/logo.png" alt="logo"/> 
    <h1> WikiNook </h1> </div>
    <div class="header-user">
    <img src="./images/user.png" alt="user"/> 
    Usuario </div> `;
    divRoot.before(header); //antes del div root
    main.innerHTML = ` 
    <aside>
    <div data-testid="select-filterGender" name="gender">
          <label for="filter"><h2>Género</h2></label>
          <ul>
            <li>
              <input type="radio" name="optionOne" id="genderMasculine" value="Masculino">
              <label for="genderMasculine">Masculino</label> 
            </li>
            <li>
              <input type="radio" name="optionOne" id="genderWomen" value="Femenino">
              <label for="genderWomen">Femenino</label> 
            </li>
          </ul>
    </div>
    <hr/>
    <div data-testid="select-filter" name="species">
          <label for="filterForSpecies"><h2>Especie</h2></label>
          <ul>
            <li>
              <input type="radio" name="optionTwo" id="specieTiger" value="Tigre">
              <label for="specieTiger">Tigre</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieDog" value="Perro">
              <label for="specieDog">Perro</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieSquirrel" value="Ardilla">
              <label for="specieSquirrel">Ardilla</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieChicken" value="Gallo">
              <label for="specieChicken">Gallo</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieMouse" value="Ratón">
              <label for="specieMouse">Ratón</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieWolf" value="Lobo">
              <label for="specieWolf">Lobo</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieDeer" value="Ciervo">
              <label for="specieDeer">Ciervo</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieDuck" value="Pato">
              <label for="specieDuck">Pato</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieCat" value="Gato">
              <label for="specieCat">Gato</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieGoat" value="Cabra">
              <label for="specieGoat">Cabra</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieBear" value="Oso">
              <label for="specieBear">Oso</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieEagle" value="Águila">
              <label for="specieEagle">Águila</label> 
            </li>
            <li>
              <input type="radio" name="optionTwo" id="specieHorse" value="Caballo">
              <label for="specieHorse">Caballo</label> 
            </li>
          </ul>
        </div>   
        <hr/>
        <div data-testid="select-filterPersonality" name="personality">
          <label for="filterForPersonality"><h2>Personalidad</h2></label>
          <ul>
            <li>
              <input type="radio" name="optionThree" id="personalityJock" value="Deportista">
              <label for="personalityJock">Deportista</label> 
            </li>
            <li>
              <input type="radio" name="optionThree" id="personalityCranky" value="Gruñón">
              <label for="personalityCranky">Gruñón</label> 
            </li>
            <li>
              <input type="radio" name="optionThree" id="personalityLazy" value="Perezoso">
              <label for="personalityLazy">Perezoso</label> 
            </li>
            <li>
              <input type="radio" name="optionThree" id="personalitySmug" value="Esnob">
              <label for="personalitySmug">Esnob</label> 
            </li>
            <li>
              <input type="radio" name="optionThree" id="personalitySweet" value="Dulce">
              <label for="personalitySweet">Dulce</label> 
            </li>
            <li>
              <input type="radio" name="optionThree" id="personalityPeppy" value="Vivaracha">
              <label for="personalityPeppy">Vivaracha</label> 
            </li>
            <li>
              <input type="radio" name="optionThree" id="personalitySnooty" value="Altanera">
              <label for="personalitySnooty">Altanera</label>
                </li>
              </ul>
            </div>
            <hr />
            <div>
              <button class="btn-clear" type="button" data-testid="button-clear">
                Limpiar filtros
              </button>
            </div>
            <div>
    </aside>
    <section>
            <div class="container">
              <div class="buscador">
                <h2>Lista de vecinos</h2>
                <div>
                  <button class="btn-statics" id="openModal">
                    <ion-icon name="stats-chart-outline"></ion-icon>
                  </button>
                </div>
                <div>
                  <label for="sort">Ordenar por:</label>
                  <select name="sort" id="sort" data-testid="select-sort">
                    <option value="all">Elige una opción</option>
                    <option value="asc">Ordenar de la A-Z</option>
                    <option value="desc">Ordenar de la Z-A</option>
                  </select>
                  <input type="text" id="searchAnimal" placeholder="Buscar vecino"/>
                  <button class="btn-clear-search"
                    data-testid="button-clearName">
                    Limpiar
                  </button>
                </div>
              </div>
              <div id="root"></div>
              <div class="content-modal" id="modal">
                <div class="modal-body">
                  <div class="modal-header">
                    <h1>Estadisticas</h1> <!--título dentro del modal-->
                  </div>
                  <div class="modal-main">
                    <div id="centerModal">
                      <div id="chart_div" style="padding-left: 100px"></div>
                      <p id="page">texto</p>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="reset" id="close" class="btn-close">
                      <ion-icon name="close-circle-outline"></ion-icon>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>`;
    divRoot.prepend(main); //antes del primer hijo
    footer.innerHTML = `
    <p>2024. All rights reserved</p>
      <img src="./images/island.png" alt="island" width="100" />
      <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none"><!--Eje x 0-700, Eje y -20-110, w100% del contenedor  preserveAspectRatio que el contenido se estire sin matener su prorporción-->
        <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#aaeaf0" /><!--describe una parte del fondo del SGVfill color de relleno-->
        <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#86CFD5"/>
      </svg> `
      divRoot.append(footer);//después del hijo
    data.forEach(element => {
    const listLi = document.createElement("li");
    listUl.appendChild(listLi); //apendChild agregar un hijo
    listLi.setAttribute('itemscope','') // Esto lo agregue para que pasarán los test HTML, aunque ya lo teníamos lo exigía dentro del li
    listLi.setAttribute('itemtype', 'https://schema.org/Game')
    listLi.className = "cardList" //poner nombre a la clase
    const divCard = document.createElement("div"); //crear div
    divCard.className = "card"; //nombre clase
    divCard.classList.add(`card${element.personality}`);
    listLi.appendChild(divCard);//li se agrega el divCard

    const dl = document.createElement("dl");
    divCard.appendChild(dl);

    const divHeader = document.createElement("div");
    divHeader.className = "headerCard";
    dl.appendChild(divHeader);

    const divBody = document.createElement("div");
    divBody.className = "bodyCard";
    dl.appendChild(divBody);

    const divFooter = document.createElement("div");
    divFooter.className = "footerCard";
    dl.appendChild(divFooter);

    // Cabecera
    const dtGender = document.createElement("dt");
    dtGender.innerText = "Genero";
    divHeader.appendChild(dtGender);

    const ddGender = document.createElement("dd");
    ddGender.setAttribute("itemprop", "gender");
    if (element.gender === "Femenino") {
      ddGender.classList.add("genderFemale");
    } else {
      ddGender.classList.add("genderMale");
    }
    divHeader.appendChild(ddGender);

    const dtSign = document.createElement("dt");
    dtSign.innerText = "Signo";
    divHeader.appendChild(dtSign);

    const ddSign = document.createElement("dd");
    ddSign.setAttribute("itemprop", "zodiacSign");
    ddSign.classList.add(`${element.facts.zodiacSign}`)
    
    divHeader.appendChild(ddSign);

    // Body
    const image = document.createElement("img");//para las imagenes de los animales
    image.setAttribute("alt", element.name);
    image.setAttribute("src", element.imageUrl);
    divBody.appendChild(image);

    // Footer
    const divInfo = document.createElement("div");//va el nombre, especie, género
    divInfo.className = "information";
    divFooter.appendChild(divInfo);

    const dtSpecie = document.createElement("dt");
    dtSpecie.innerText = "Especie";
    divInfo.appendChild(dtSpecie);

    const ddSpecie = document.createElement("dd");
    ddSpecie.setAttribute("itemprop", "species");
    ddSpecie.innerText = element.species;
    divInfo.appendChild(ddSpecie);

    const dtName = document.createElement("dt");
    dtName.innerText = "Nombre";
    divInfo.appendChild(dtName);

    const ddName = document.createElement("dd");
    ddName.setAttribute("itemprop", "name");
    ddName.innerText = element.name;
    divInfo.appendChild(ddName);

    const dtPersonality = document.createElement("dt");
    dtPersonality.innerText = "Personalidad";
    divInfo.appendChild(dtPersonality);

    const ddPersonality = document.createElement("dd");
    ddPersonality.setAttribute("itemprop", "personality");
    let personality = element.personality;
    if (personality.length > 5) {
      personality = personality.substring(0, 5) + "..";//si la personalidad tiene más de 5 letras poner tres puntos, número para que no tome todo el nombre y lo corte
    }
    ddPersonality.innerText = personality;
    divInfo.appendChild(ddPersonality);

    const divDate = document.createElement("div");
    divDate.className = "date";
    divFooter.appendChild(divDate); //para colocar la imagen del pastel

    const cake = document.createElement("img");
    cake.setAttribute("alt", "cake");
    cake.setAttribute("src", "./images/Pastel de cumple.png");
    divDate.appendChild(cake);

    const dtBirthday = document.createElement("dt");
    dtBirthday.innerText = "Cumpleaños";
    divDate.appendChild(dtBirthday);

    const ddBirthday = document.createElement("dd");
    ddBirthday.setAttribute("itemprop", "birthDate");
    ddBirthday.innerText = element.facts.birthDate;
    divDate.appendChild(ddBirthday);
    //console.log(listLi);
  });
  return divRoot.appendChild(listUl);*/
 // };

  //export default renderItems;

  //este es el home.js
/*export const Example = () => {
  const titulo = document.createElement("p");
  titulo.innerHTML = "WIKINOOK";
  return titulo;
}*/






/*
const num = "h o la"
let array = "";
let array2 = ""
for (let index = 0; index < num.length; index++) {
  if (num.length == " "){
    array2+= num[index]-1;
  } else {
   array+= num[index];
  }
}
console.log(array);
console.log(array2);
*/


/*const num = "hola"
let array = "";
for (let index = 0; index < num.length; index++) {
  array+= num[index];
}
console.log(array);*/

/* PARA HACERLO EN REVERSA
const num2 = "hola"
let array2 = "";
for (let index = 0; index > num2.length-1; index--) {
  array2+= num2[index].length-1;
}
console.log(array2);
*/















// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
//import renderItems from './views/Example.js';//importo el nombre de la const desde el view y nombre del archivo.
//import startingScreen from './views/startingScreen.js';
// import {Example} from './views/Example.js';
// import data from './data/dataset.js';
// import { onURLChange, setRootEl, setRoutes  } from './router.js';
//renderItems(data);
//Example();
//startingScreen(data)
/*
const routes = {//ESTE HACE REFERENCIA AL ROUTER DE ROUTER.JS
    "/": Example,
    "/error": "some",//no dejar en blanco, va el componente error
}
const root = document.getElementById("root");
//se pasa por parametro el routes del const
//PARA VINCULARSE CON EL ROUTER
setRoutes(routes);// se debe definir, importar la función
setRootEl(root)//puede traerse directo sin la const (document.querySelector("#root"));
//usar un listener para escuchar lo que va a suceder en el document con
//carga el contenido ya que carga todo
//DOMContentLoaded(se dispara cuando el contenido del archivo HTML se ha cargado en el navegador)
document.addEventListener("DOMContentLoaded", (event) => {//document va a escuchar, DOMContentLoaded(se refiere cuando el documento fue parciado(interpretado)) se espera a que todo el contenido de modulos ya fuera cargado
    console.log("Dom cargado");//vamos a llamar a la función onURLChange, porque es la que esta cambiando la url
    console.log(event.target.location.pathname);
    onURLChange(event.target.location);
    console.log("hola");
    //console.log(event); el target es el document y lo que llamamos es location, url
})*/


API

//import { ButtonHome } from "../components/Button.js";
//import { Footer } from "../components/Footer.js";
//import { navigateTo } from "../router.js";
import { Button } from "../components/Button.js";
import { getApiKey } from "../lib/apiKey.js";
export const Api = () => {
  const container = document.createElement("div");
  const apiPage = document.createElement("main");
  apiPage.innerHTML = `
  <form>
    <div class="header-title headerApiKey">
      <img src="./images/Logo.png" alt="Logo" />
      <h1>WikiNook</h1>
    </div>
    <div class="container__ApiUser">
    <label for="userName">USUARIO </label>
    <div class="container__ApiUser__text">
    <input type="text id="userName" class="userName" placeholder="Margarita">
    </div>
    </div>
    <div class="container__keyApi">
    <label for="api-key">CLAVE API </label>
    <div class="container__keyApi__hidden">
    <input type="password" id="api-key" class="api__key" placeholder="sk-4Ktb2qBVRLb.........QVm">
    <i class='bx bx-show'></i> 
    </div>
    <p class="textKeyApi">¿Qué es una llave API? <a href="https://aws.amazon.com/es/what-is/api-key/" target="_blank"> Información</a> ¿No cuentas con tu API? Puedes generarla <a href="https://platform.openai.com/api-keys" target="_blank">aquí</a><p>
    </div>
    <button type="button" class="buttonApiSave show"> SAVE API KEY</button>
    <button type="button" class="buttonApiDelete hide"> DELETE </button>
  </from>
    `;/*CAMBIAR MI BOTÓN POR UN INPUT TIPO BOTÓN */
  const apiKeyInput= apiPage.querySelector("#api-key");
  const apiKeyPass= apiPage.querySelector(".api__key");//checar, si la comento no aparece el texto
  const iconSHow = apiPage.querySelector(".bx");
  iconSHow.addEventListener("click", ()=> {
    if(apiKeyPass.type == "password"){
      apiKeyPass.type = "text";
      iconSHow.classList.remove("bx-show");
      iconSHow.classList.add("bx-hide");
    } else {
      apiKeyPass.type = "password";
      iconSHow.classList.add("bx-hide");
      iconSHow.classList.remove("bx-show");
    }
  });
  const buttonSave = apiPage.querySelector(".buttonApiSave");
  const buttonDelete = apiPage.querySelector(".buttonApiDelete")
    buttonSave.addEventListener("click", () => {
        buttonDelete.classList.remove("hide");
        buttonDelete.classList.add("show");
        buttonSave.classList.remove("show");
        buttonSave.classList.add("hide");
        // localStorage.setItem("apiKey", apiKeyInput.vlaue);
        getApiKey(apiKeyInput.value)
      } );
    buttonDelete.addEventListener("click", () =>{
      buttonSave.classList.remove("hide");
      buttonSave.classList.add("show");
      buttonDelete.classList.remove("show");
      buttonDelete.classList.add("hide");
      // localStorage.removeItem("miGato", "Juan");

    } );

    // apiKeyInput.addEventListener("keydown", functionApi);
    
    // function functionApi() {
    //   // alert("hola"); 
    //   getApiKey(); 

    // }
    container.append(Button("CERRAR"), apiPage);
      // container.append(apiPage);
    return container;
  }


  INDEX.JS

  import { Home } from './views/Home.js';
import {StartingScreen} from './views/StartingScreen.js';
import { GroupalChat } from './views/GroupalChat.js';
import { IndividualChat } from './views/IndividualChat.js';
import { Api } from './views/Api.js';
import { Error } from './views/Error.js';
import { onURLChange, setRootEl, setRoutes } from './router.js';
import { Stats } from './views/Stats.js';
import data from './data/dataset.js' 
//import { computeStats, filterData, sortData } from './lib/dataFunctions.js';
//import { SectionHomeS } from './components/SectionHome.js';
// import data from '../data/dataset.js';
//const sort = document.querySelector('[data-testid="select-sort"]');
//sort.addEventListener("change", ()=> {console.log("ordenado");})

const routes = {
    "/": StartingScreen,
    "/home": Home,
    "/groupal": GroupalChat,
    "/individual": IndividualChat,
    "/api": Api,
    "/error": Error,
    "/stats": Stats,
};

// for
for(let i = 0; i< data.length; i++){
    routes[`/individual-${data[i].name.toLowerCase()}`] = IndividualChat;
    // console.log(data[i])
}

//forEach

const root = document.getElementById("root");
setRoutes(routes);
setRootEl(root)

document.addEventListener("DOMContentLoaded", (event) => {
    console.log(event.target.location.pathname);
    onURLChange(event.target.location.pathname);
});

window.addEventListener("popstate", (event) => {
    onURLChange(event.target.location.pathname);
});




  CARDS.JS



  import { navigateTo } from "../router.js";

export const Cards = (data) => {
  const listUl = document.createElement("ul");
  data.forEach((element) => {
    const listLi = document.createElement("li");
    listUl.appendChild(listLi);
    listLi.setAttribute('itemscope','')
    listLi.setAttribute('itemtype', 'https://schema.org/Game')
    listLi.className = "cardList"
    const divCard = document.createElement("div");
    divCard.className = "card";
    divCard.classList.add(`card${element.personality}`);
    listLi.appendChild(divCard);

    const dl = document.createElement("dl");
    divCard.appendChild(dl);

    const divHeader = document.createElement("div");
    divHeader.className = "headerCard";
    dl.appendChild(divHeader);

    const divBody = document.createElement("div");
    divBody.className = "bodyCard";
    dl.appendChild(divBody);

    const divFooter = document.createElement("div");
    divFooter.className = "footerCard";
    dl.appendChild(divFooter);

    // Cabecera
    const dtGender = document.createElement("dt");
    dtGender.innerText = "Genero";
    divHeader.appendChild(dtGender);

    const ddGender = document.createElement("dd");
    ddGender.setAttribute("itemprop", "gender");
    if (element.gender === "Femenino") {
      ddGender.classList.add("genderFemale");
    } else {
      ddGender.classList.add("genderMale");
    }
    divHeader.appendChild(ddGender);

    const dtSign = document.createElement("dt");
    dtSign.innerText = "Signo";
    divHeader.appendChild(dtSign);

    const ddSign = document.createElement("dd");
    ddSign.setAttribute("itemprop", "zodiacSign");
    ddSign.classList.add(`${element.facts.zodiacSign}`)
    divHeader.appendChild(ddSign);

    // Body
    const image = document.createElement("img");
    image.setAttribute("alt", element.name);
    image.setAttribute("src", element.imageUrl);
    divBody.appendChild(image);

    // Footer
    const divInfo = document.createElement("div");
    divInfo.className = "information";
    divFooter.appendChild(divInfo);

    const dtSpecie = document.createElement("dt");
    dtSpecie.innerText = "Especie";
    divInfo.appendChild(dtSpecie);

    const ddSpecie = document.createElement("dd");
    ddSpecie.setAttribute("itemprop", "species");
    ddSpecie.innerText = element.species;
    divInfo.appendChild(ddSpecie);

    const dtName = document.createElement("dt");
    dtName.innerText = "Nombre";
    divInfo.appendChild(dtName);

    const ddName = document.createElement("dd");
    ddName.setAttribute("itemprop", "name");
    ddName.innerText = element.name;
    divInfo.appendChild(ddName);

    const dtPersonality = document.createElement("dt");
    dtPersonality.innerText = "Personalidad";
    divInfo.appendChild(dtPersonality);

    const ddPersonality = document.createElement("dd");
    ddPersonality.setAttribute("itemprop", "personality");
    let personality = element.personality;
    if (personality.length > 5) {
      personality = personality.substring(0, 5) + "..";
    }
    ddPersonality.innerText = personality;
    divInfo.appendChild(ddPersonality);

    const divDate = document.createElement("div");
    divDate.className = "date";
    divFooter.appendChild(divDate);

    const cake = document.createElement("img");
    cake.setAttribute("alt", "cake");
    cake.setAttribute("src", "./images/Pastel de cumple.png");
    divDate.appendChild(cake);

    const dtBirthday = document.createElement("dt");
    dtBirthday.innerText = "Cumpleaños";
    divDate.appendChild(dtBirthday);

    const ddBirthday = document.createElement("dd");
    ddBirthday.setAttribute("itemprop", "birthDate");
    ddBirthday.innerText = element.facts.birthDate;
    divDate.appendChild(ddBirthday);
    listLi.addEventListener("click", ()=>{
      console.log(element);
      navigateTo(`/individual-${(element.name).toLowerCase()}`, element)
    })
  });

  return listUl;
};





FUNCION APIKEYS



export const getApiKey = (apiKey)=>{//OBTENER LA LLAVE
  //var cat = localStorage.getItem("API-KEY")
  //miStorage = window.localStorage;
  //hacer la función y llamarla en la api
  //console.log("hola");
  localStorage.setItem("apiKey", apiKey);

}
const setApiKey = ()=>{//PARA GUARDAR LA API
  //localStorage.setItem("perro", "12355")

}





ROUTER



const renderView = (pathname, props= {}) => {
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
  const cleanRoot = rootElement;
  cleanRoot.innerHTML = "";
  if(ROUTES[pathname]) {
    console.log({pathname})
      const template = ROUTES[pathname](props);
      //console.log(template);
      cleanRoot.appendChild(template);
  } else {
      cleanRoot.appendChild(ROUTES["/error"]());
  }
} 

export const navigateTo = (pathname, props={}) => {
  // console.log(props);
  // update window history with pushState
  // render the view with the pathname and props
  //hostname
  // const urlVisited = window.location.hostname + pathname;
  history.pushState({}, "", pathname);
  // console.log(urlVisited);
  renderView(pathname, props);
}




CHAT INDIVIDUAL




//import { Footer } from "../components/Footer.js";
import { Header } from "../components/Header.js";

export const IndividualChat = (element) => {
    // console.log(element);
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
                <p class="character-name">${element.name}</p>
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

  container.append(Header(), main);

  return container;
};
