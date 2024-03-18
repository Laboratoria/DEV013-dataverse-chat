/*export function Error(props) {
  const viewEl = document.createElement("div");
  viewEl.textContent = "Error 404";
  return viewEl;
}*/
export const Error = () => {
  const viewError = document.createElement("section");
  viewError.id = "viewError";

  const headerError = headerComponent();
  const contentError = document.createElement("section");
  contentError.id = "contentError";

  contentError.innerHTML = `
<h1 class=titleError> Error Página de Pruba </h1>
<br>
<p class=textError> Página no encontrada </p>`;

  viewError.append(headerError, contentError);
  return viewError;
};