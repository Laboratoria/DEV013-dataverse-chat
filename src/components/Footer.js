export const Footer = () => {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <p>2024. All rights reserved</p>
      <img src="./images/island.png" alt="island" width="100" />
      <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none"><!--Eje x 0-700, Eje y -20-110, w100% del contenedor  preserveAspectRatio que el contenido se estire sin matener su prorporción-->
        <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#aaeaf0" /><!--describe una parte del fondo del SGVfill color de relleno-->
        <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#86CFD5"/>
      </svg>
      `;
  return footer;
};
