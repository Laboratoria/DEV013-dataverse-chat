//import { SectionHome } from "./../src/components/SectionHome.js";
import { Header } from "../src/components/Header.js";
import { Button } from "../src/components/Button.js";
// import { navigateTo } from "../src/router.js";
// console.log(Button);
// jest.mock(navigateTo)

//Así se busco la información "jest mock function from another file"

describe("Elementos que interactúan con el DOM", () => {
  const routerFalse = require("../src/router")// Aquí traemos todo nuestro archivo del router
  const spyOn = jest.spyOn(routerFalse, 'navigateTo')//Aquí ejecutamos la función spyOn de jest, espiamos dentro de nuestro router, buscando 'navigateTo
  spyOn.mockImplementation((pathname) => {//hacemos mock de nuestro 'navigateTo' que trajimos con el spyOn, y agregamos la ruta que necesitabamos
    history.pushState({}, "", pathname);
  })

  it("El botón debería enviarnos a otro pathname", () => {
    document.body.appendChild(Button())
    const buttonBack = document.querySelector(".buttonBack")
    buttonBack.click()
    expect(window.location.pathname).toBe("/home")
  })

  it("El link del navbar debería enviarnos a el pathname stats", () => {
    document.body.appendChild(Header());
    document.querySelector("#stats").click()
    expect(window.location.pathname).toBe("/stats")
  })

  it("El link del navbar debería enviarnos a otro pathname API", () => {
    document.body.appendChild(Header());
    document.querySelector("#api").click()
    expect(window.location.pathname).toBe("/api")
  })

  it("El link del navbar debería enviarnos a el pathname home", () => {
    document.body.appendChild(Header());
    document.querySelector("#home").click()
    expect(window.location.pathname).toBe("/home")
  })

  it("El link del navbar debería enviarnos a el pathname error", () => {
    document.body.appendChild(Header());
    document.querySelector("#about-us").click()
    expect(window.location.pathname).toBe("/error")
  })
})

// describe("Button", () => {
//   it("Debería enviarnos a otro documento al darle clic al botón", () => {
//     // document.body.appendChild = `afterclick
//     const appendFalse = document.body.appendChild(Button());
//     console.log(appendFalse, "appendFalse")
//     // document.body.innerHTML = `<button class="buttonBack"></button>`;
//     // const classFalse = document.querySelector(".buttonBack");
//     // require("../src/components/Button.js")
//     // console.log("APPEND", classFalse)
//     // const initPath = "/individual"
//     // const locationPath = "/home"
//     console.log(window.location.pathname, "window test")
//     // classFalse.click();
//     //console.log("AFTER", afterClic)
//     expect().toEqual();
//   });
// });

//newTodoInput.value = 'New todolist!';
//   addTodoBtn.click();

//   expect(todolist.innerHTML).toBe('<li>New todolist!</li>');
// });

// expect(received).toEqual(expected) //

// Expected: false?? porque falso?? Buena pregunta
// Received: undefined

/*
<div class="header-title">
    <img src="./images/Logo.png" alt="Logo" />
      <h1>WikiNook</h1>
  </div>
  <nav>
    <ul class="nav-ul">
      <li><a id="home">Home</a></li>
      <li><a id="stats">Estadisticas</a></li>
      <li><a id="about-us">Saber Más</a></li>
    </ul>
    <div>
    <button class="btn-header" id="api"> API KEY </button>
    </div>
    </nav>
*/

// test('Check addTodo able add todo to todoList', () => {
//   document.body.innerHTML = `
//     <input id="newTodoInput" />
//     <button id="addTodoBtn">Add todo</button>
//     <ol id="todoList"></ol>
//   `;
//   require('../todolist.js');

//   const newTodoInput = document.getElementById('newTodoInput');
//   const addTodoBtn = document.getElementById('addTodoBtn');
//   const todolist = document.getElementById('todoList');

//   newTodoInput.value = 'New todolist!';
//   addTodoBtn.click();

//   expect(todolist.innerHTML).toBe('<li>New todolist!</li>');
// });
