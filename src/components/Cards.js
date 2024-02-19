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
  });
  return listUl;
};