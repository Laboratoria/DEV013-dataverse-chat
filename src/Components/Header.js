export const Header = () => {
  const header = document.createElement('header');
  header.setAttribute("class", "header");
  header.innerHTML = `
  <div>
    <div class= title-header> 
        <img src="images/news.gif" class=logo-header>
        <h1>K-Drama Verse</h1>
    </div>

  </div>
  `;
  return header;
}