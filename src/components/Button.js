 import { navigateTo } from "../router.js";
export const ButtonHome = () => {
    const container = document.createElement("div");
    container.innerHTML = `
    <button type="button" class="buttonBack"> HOME </button>`;
    container.querySelector(".buttonBack").addEventListener("click", () => {navigateTo ("/home", {})});
    //container.querySelector(".buttonBack").addEventListener("click", () => console.log("home"));
    return container;
};

    //buttonDelete.addEventListener("click", () => {navigateTo("/home", {})});
//homePage.querySelector("#API").addEventListener("click", () => navigateTo("/api", { }));