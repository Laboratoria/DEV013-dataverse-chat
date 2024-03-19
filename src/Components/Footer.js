export const Footer = () => {
  const footerElement = document.createElement("footer");
  footerElement.setAttribute("class", "footer");
  footerElement.innerHTML = `<p>Copyright @ 2024 Antone Gonzales & Melany Ventura</p>`;
  return footerElement;
};
