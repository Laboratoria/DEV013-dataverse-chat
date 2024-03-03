// import { SectionHome } from "./../src/components/SectionHome.js";
import { Button } from "../src/components/Button.js";
("use strict");

//import {Button } from './Service';

jest.mock("../src/components/Button.js", () => jest.fn());

Button.jest.fn((cb) => {
  cb({
    fullName: "Johnny Cash",
    loggedIn: true,
  });
});
// = jest.fn(() => { /*your mock*/ })

//jest.mock("./../src/components/Button");

// jest.mock("./../src/components/Button", () => {
//     return {
//       __esModule: true,
//       default: jest.fn(),
//     };
//   });

describe("Button", () => {
  it("Debería reaccionar al hacer clic", () => {
    document.body.innerHTML = `
    <div> 
    <span id="username></span>
    <button type="button" id="button"> Botón </button> </div>`;
    //require("../src/components/Button");

    const button = require("./../src/components/Button");
    const $ = require("jquery");

    // button.mockImplementation( cb => {
    //   cb({
    //     fullName: "Johnny Cash",
    //     loggedIn: true,
    //   });
    //});

    // Use jquery to emulate a click on our button
    $("#button").click();

    expect(button).toHaveBeenCalled();
    expect($("#username").text()).toBe("Johnny Cash - Logged In");
  });
});

describe("SectionHome", () => {
  it("Debería ", () => {
    expect().toEqual();
  });
});
