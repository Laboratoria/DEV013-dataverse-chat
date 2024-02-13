// export const api = () => {
//     const titulo = document.createElement("p");
//     titulo.innerHTML = "API-KEY";
//     return titulo;
//   }

  export const api = () => {
    //const root = document.querySelector("#root");
    const form = document.createElement("form");
    form.innerHTML = `
    <label for="api-key">CLAVE API: </label>
    <input type="text id="api-key placeholder="Api-key">
    <button type="button"> <ion-icon name="bookmark-sharp"></ion-icon>SAVE </button>
    `
    //root.appendChild(form);    
    return form;
  }