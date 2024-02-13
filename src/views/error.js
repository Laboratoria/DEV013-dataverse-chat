export const error = () => {
  const page = document.createElement("p");
  page.innerHTML = "VISTA ERROR";
  return page;
  };
/*
  export const error = () => {
   const root = document.querySelector("#root");
  const figure = document.createElement("figure");
  figure.innerHTML = `
  <figcaption>
  <img src="./images/error/error1.jpg" alt="error 404"/>
  </figcaption>`
  root.appendChild(figure);
  console.log(figure);
  return figure;
  };
  */