export const Error = () => {
  const error = document.createElement('div');
  error.className = 'header';
  error.innerHTML = `
  <div>
    <div class= titulo> 
        <img src="images/robot404.jpg" class=logo-error>
        <h1>{404}</h1>
        <h2> Página no encontrada </h2>
    </div>

  </div>
  `;
  return error;
}