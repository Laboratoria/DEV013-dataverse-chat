/*export const individual = () => {
    const titulo = document.createElement("p");
    titulo.innerHTML = "CHAT INDIVIDUAL";
    return titulo;
  }*/
//filas TR 
//columnas TD (celdas de datos)
//columnas TH (celdas de encabezado)
  export const Individual = () => {
    const container = document.createElement("div");
    const pageTable = document.createElement("table");
    pageTable.innerHTML = `
    <tr>
    <td><img src="./images/Logo.png" alt="Logo" /> </td>
    </tr>
    <tr>
    <th> PASSPORT </th>
    </tr>
    <tr>
    <td>Ninten </td>
    <td>Orages </td>
    </tr>
    <tr>
    <td>Island </td>
    </tr>
    <tr>
    <td>Cait </td>
    </tr>
    <tr>
    <td>Born December 14th </td>
    </tr>

    `;
    container.appendChild(pageTable);
    return container;
  }