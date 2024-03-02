import { navigateTo } from "../router.js";

export const Button = () => {
  const container = document.createElement("div");
  container.innerHTML = `
    <ion-icon name="close-outline" class="buttonBack"></ion-icon>`;
  container.querySelector(".buttonBack").addEventListener("click", () => {
    navigateTo("/home", {});
  });
  return container;
};















/*
import { navigateTo } from "../router.js";

export const Button = (nameButton) => {
  const container = document.createElement("div");
  container.innerHTML = `
    <button type="button" class="buttonBack"> ${nameButton} </button>`;
  container.querySelector(".buttonBack").addEventListener("click", () => {
    navigateTo("/home", {});
  });
  //container.querySelector(".buttonBack").addEventListener("click", () => console.log("home"));
  return container;
};
*/