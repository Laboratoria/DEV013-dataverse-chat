import { navigateTo } from "../router.js";
import { getApiKey } from "../lib/apiKey.js";
//import { communicateWithOpenAI } from "../lib/openAIApi.js";
/*export const Cards = (data) => {
  // const divContainerFace = document.createElement("div");
  // divContainerFace.className = "containerFace";
  // data.map ((item) => item)

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
    listLi.addEventListener("click", () => {
      // navigateTo(`/individual`, {id: element.id});
      navigateTo(`/individual?id=${element.id}`);
    });
    
  });
  return listUl;
};*/

export const Cards = (data) => {
  const listUl = document.createElement("ul");
  data.forEach((element) => {
    const listLi = document.createElement("li");
    listUl.appendChild(listLi);
    listLi.setAttribute('itemscope', '');
    listLi.setAttribute('itemtype', 'https://schema.org/Game');
    listLi.className = "cardList";
    const divCard = document.createElement("div");
    divCard.className = "card";
    divCard.classList.add(`card${element.personality}`)
    divCard.innerHTML = `
    <dl>
    <div class="headerCard">
    <dt>Genero</dt><dd class="gender show" itemprop="gender" class= ${element.gender === "Femenino" ? "genderFemale" : "genderMale"}></dd>
    <dt>Signo</dt><dd class="sign show" itemprop="zodiacSign" class=${element.facts.zodiacSign}></dd>
    </div>
    <div class="bodyCard" data-img-one="${element.imageUrl}" data-img-one="${element.imageUrlFace}">
    <img src= ${element.imageUrl} alt=${element.name}></dd>
    </div>
    <div class="footerCard">
      <div class="information">
        <dt>Especie</dt><dd itemprop="species" class="specie show">${element.species}</dd>
        <dt>Nombre</dt><dd itemprop="name">${element.name}</dd>
        <dt>Personalidad</dt><dd class="personality show" itemprop="personality" >${element.personality.length > 5 ? element.personality.substring(0, 5) + ".." : element.personality}</dd>
      </div>
    <div class="date">
    <img src="./images/Pastel de cumple.png" alt="cake"/>
    <dt>Cumpleaños</dt><dd class="birthDay show" itemprop="birthDate">${element.facts.birthDate}</dd>
    </div>
    </div>
    </dl>
    `;
    listLi.append(divCard);

    const birthDay = listLi.querySelector(".birthDay");
    const specie = listLi.querySelector(".specie");
    const sign = listLi.querySelector(".sign");
    const gender = listLi.querySelector(".gender");
    const personality = listLi.querySelector(".personality");
    // const birthDay = listLi.querySelector(".birthDay");
    // const birthDay = listLi.querySelector(".birthDay");
    // const birthDay = listLi.querySelector(".birthDay");


    const prueba = listLi.querySelectorAll(".bodyCard");
    for (const iterator of prueba) {
      iterator.addEventListener('mouseover', cambiarColor)
      iterator.addEventListener('mouseout', cambiarColor)
    }
    function cambiarColor(e) {
      if (e.type === "mouseover") {
        e.currentTarget.innerHTML = `<img src=${element.imageUrlFace} alt=${element.name}>`
        birthDay.classList.remove("show");
        birthDay.classList.add("hide");
        specie.classList.remove("show");
        specie.classList.add("hide");
        personality.classList.remove("show");
        personality.classList.add("hide");
        gender.classList.remove("show");
        gender.classList.add("hide");
        sign.classList.remove("show");
        sign.classList.add("hide");

      } else {
        e.currentTarget.innerHTML = `<img src="${element.imageUrl}" alt=${element.name}>`
        birthDay.classList.remove("hide");
        birthDay.classList.add("show");
        specie.classList.remove("hide");
        specie.classList.add("show");
        personality.classList.remove("hide");
        personality.classList.add("show");
        gender.classList.remove("hide");
        gender.classList.add("show");
        sign.classList.remove("hide");
        sign.classList.add("show");
      }
    }

    listLi.addEventListener("click", () => {
      if(getApiKey()){
        navigateTo(`/individual?id=${element.id}`);
      } 
      else {
        navigateTo("/api", {});
      }
    });
  });
  return listUl;
};
















//hacer if en card para mandar a api, antes de individual
//hacer función para eliminar api key
//cambiar por select y option
//borde rojo al input cuando no hay texto
//naveagación hacia api, cuando no se detecta la llave

// listLi.addEventListener("click", () => {
//   // navigateTo(`/individual`, {id: element.id});
//   if(setApiKey(window.localStorage)){
//     navigateTo(`/individual?id=${element.id}`);
//   } else {
//     navigateTo(`/api`);
//   }
// });
// });

// listLi.addEventListener("click", () => {
//   // navigateTo(`/individual`, {id: element.id});
//   navigateTo(`/individual?id=${element.id}`);});
// });