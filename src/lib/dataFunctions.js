//exportar funciones
export const sortData = (data, sortBy, sortOrder ) => {
    data.sort( (a, b) => {
      const valueA = a[sortBy];  
      const valueB = b[sortBy]; 
      const compare = valueA.localeCompare(valueB);
      return (sortOrder === "asc" ? compare : -compare); 
    });
    return data;
  };

export const filterData = (data, filterBy, value) => {
  const array = data.filter((items => items[filterBy] === value));
  return array;
};

export const computeStats = (data) => {
  const acumulador = data.reduce((acumulador, item) => {//reduce tiene la data, el valor inicial y 0=suma total de lo acumulado
    if (!acumulador[item.gender]) {//hasOwnProperty devuelve true si la propiedad existe, si un objeto tiene una propiedad con un nombre específico
      acumulador[item.gender] = 1;
    }
    else {
      acumulador[item.gender]++;
    }
    console.log(acumulador);
    return acumulador;
  }, {});
  //{femenino: 8
  //masculino: 16}
  
  const totalWomen = acumulador.Femenino;
  const totalMen = acumulador.Masculino;
  const totalFemale = parseFloat((totalWomen/data.length)*100).toFixed(2); 
  const totalMale = parseFloat((totalMen/data.length)*100).toFixed(2);
  return `${totalFemale} \n ${totalMale} `;
  //return `Porcentaje personajes masculinos: ${totalMen}% `; // \n se usa para hacer un salto de linea en un texto 
};