import { computeStats, filterData, sortData } from '../src/lib/dataFunctions.js';//IMPORTAR LAS FUNCIONES
import { data as fakeData } from './../test/fakeData.js';//fakedata para trabar pocos elementos y nos los 24 en data.js

const testData = [fakeData[1], fakeData[3], fakeData[2], fakeData[0]];
const expectDataAsc = [fakeData[0], fakeData[1], fakeData[3], fakeData[2]];
const expectDataDesc = [fakeData[2], fakeData[3], fakeData[1], fakeData[0]];
const filterSpecie = [fakeData[0], fakeData[1]];
const filterPesonality = [fakeData[1], fakeData[3]];
const testDataFilterFe = [fakeData[0], fakeData[2]];// array con los dos objetos, completos

describe('Ordenar la data "asc"', () => {//crear una colección de test filter data
  it('Debería ordenarse de forma ascendente y descendente', () => {//inician con it o test, descripción de que estamos configurando, empezar con debería quehace(ordenar en forma ascendente los nombres de la data) //ESO QUE VA HACER MI TEST DEBE HACER... SE PUEDEN AGREGAR DOS O MAS IT
    const actualAsc = sortData(fakeData, "name", "asc");
    expect(actualAsc).toEqual(expectDataAsc);//tobe exminar los parametros de mi función//TO EQUAL COMPARA OBJETOS Y ARRAY expect(sortData(testData, "name", "desc")).toEqual(expectDataDesc);  //(TOBE: DATOS PRIMITIVOS) EL ARREGLO FILTRADO
    expect(sortData(testData, "name", "desc")).toEqual(expectDataDesc);
    expect(actualAsc[0].name).toBe("Bea");
    expect(actualAsc[0].name).not.toBe("Biskit");
    expect(actualAsc[actualAsc.length-1].name).toBe("Yuki");

  });
});

describe("Filtrar la data por especie, por género y por personalidad", () => {
  it("Debería filtrar los animales por género", () => {
    expect(filterData(fakeData, "gender", "Femenino")).toEqual(testDataFilterFe); // espera la data y resive
  })
  it("Debería filtrar los animales por especie", () => {
    expect(filterData(fakeData, "species", "Perro")).toEqual(filterSpecie);   
  })
  it("Debería filtrar los animales por personalidad", () => {
    expect(filterData(fakeData, "personality", "Perezoso")).toEqual(filterPesonality);   
  })
});

describe("Estadística númerica por género de los personajes", () => {
  it("Debería darnos el porcentaje de personajes femeninos", () => {
    const actual = computeStats(fakeData);
    expect(actual.totalFemale).toBe("50.00");
  })
});