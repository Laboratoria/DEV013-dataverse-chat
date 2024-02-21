/*export const AsideHome = () => {
  const aside = document.createElement("aside");
  aside.className = "asideFilter";
  aside.innerHTML = `
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
  `;
  console.log({aside});
  return aside;
}
*/






/*export const AsideHome = () => {
  const aside = document.createElement("aside");
  aside.className = "asideFilter";
  aside.innerHTML = `
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
  `;
  console.log({aside});
  return aside;
}

*/

/*
//import { filterData } from "../lib/dataFunctions.js";
import data from '../data/dataset.js';
import { Cards } from "./Cards.js";
//import { SectionHome } from "./SectionHome.js";

export const AsideHome = () => {
    const aside = document.createElement("aside");
    aside.className = "asideFilter";
    aside.innerHTML = `
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
    `;

    const filterGender = document.querySelector('[data-testid="select-filterGender"]');
    const filterPersonality = document.querySelector('[data-testid="select-filter"]');
    const filterSpecies = document.querySelector('[data-testid="select-filterPersonality"]');
    
    // filterGender.addEventListener("click", () => {
    //   console.log("hola");
    // })
    return aside;
}
*/


/*
const content = section.querySelector("#content");
    content.append(Cards(data));
    const ordenar = section.querySelector('[data-testid="select-sort"]');
    
    ordenar.addEventListener("change", (event)=> {
      content.innerHTML = "";
      console.log(event.target.value);
      let sortedData = sortData(data, "name", event.target.value);
      content.append(Cards(sortedData));
*/