//import { data } from '../data/dataset.js';
//import { filterData } from '../lib/dataFunctions';

export function Home() {
  const section = document.createElement('section');

  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
  <div>
    <img src="images/news.gif" class=logo-encabezado>
    <h1>K-Drama Verse</h1>
  </div>
  `
section.appendChild(header);
return section;
}