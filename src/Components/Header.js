export const Header = () => {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
  <div>
    <div class= titulo> 
        <img src="images/news.gif" class=logo-encabezado>
        <h1>K-Drama Verse</h1>
    </div>

  </div>
  `;
  return header;
}