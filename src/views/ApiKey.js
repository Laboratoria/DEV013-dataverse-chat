export const ApiKey = () => {
  const apikey = document.createElement('div');
  apikey.className = 'header';
  apikey.innerHTML = `
  <div>
    <p>Ingresa tu API Key</p>
    <img src="images/key.png" class="logo-apikey">
    <input type="=texto-apikey">
    <button class="boton-confirmar">Confirmar</button>
    <button class="boton-cancelar">Cancelar</button>
  </div>
  `;
  return apikey;
}