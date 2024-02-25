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
