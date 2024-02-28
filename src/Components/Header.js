export const Header = () => {
  const header = document.createElement('header');
  header.setAttribute("class", "header");
  header.innerHTML = `
  <div>
    <div class= "container-title-header"> 
        <img src="images/news.gif" class= "logo-header">
        <h1 class= "title-kdrama">K-DRAMA <span class= "title-verse">VERSE</span></h1>
    </div>

  </div>
  `;
  return header;
}