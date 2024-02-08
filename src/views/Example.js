/*const Example = () => {

};

export default Example;*/

const renderItems = (data) => {//ejemplo de lo que se va a mostrar
  return document.createElement("h1").textContent("WIKINOOK");
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
  };

  export default renderItems;