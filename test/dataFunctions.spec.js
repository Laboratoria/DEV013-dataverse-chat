import { sortData, filterData, computeStats } from "../src/lib/dataFunctions.js";
import data from "./data.js";

// test unitario para la funcion ordenar
describe("sortData function", () => {
  //este es el orden real que deberia tener el ordenado ascendente con sortData1
  const sortData1 = [data[0], data[3], data[1], data[4], data[2], data[5]];
  it("retorna datos ordenados ascendente", () => {
    const resultado = sortData(data, "name", "asc");
    expect(resultado).toEqual(sortData1);
  });
  //este es el orden real que deberia tener el ordenado descendente con sortData2
  const sortData2 = [data[5], data[2], data[4], data[1], data[3], data[0]];
  it("returna datos ordenados descendente", () => {
    const resultado = sortData(data, "name", "desc");
    expect(resultado).toEqual(sortData2);
  });
});
// test unitario para la funcion filtrar
describe("filterData por Genero de Prueba ", () => {
  const filter1 = [data[0]];
  it("Deberia filtrar por genero Romance", () => {
    const result = filterData(data, "totalGenero", "Romance");
    expect(result).toStrictEqual(filter1);
  });
  const filter2 = [data[1]];
  it("Deberia filtrar por genero Drama", () => {
    const result = filterData(data, "totalGenero", "Drama");
    expect(result).toStrictEqual(filter2);
  });
  const filter3 = [data[2]];
  it("Deberia filtrar por genero Comedia", () => {
    const result = filterData(data, "totalGenero", "Comedia");
    expect(result).toStrictEqual(filter3);
  });
  const filter4 = [data[3]];
  it("Deberia filtrar por genero Fantasía", () => {
    const result = filterData(data, "totalGenero", "Fantasía");
    expect(result).toStrictEqual(filter4);
  });
  const filter5 = [data[4]];
  it("Deberia filtrar por genero Thriller", () => {
    const result = filterData(data, "totalGenero", "Thriller");
    expect(result).toStrictEqual(filter5);
  });
  const filter6 = [data[5]];
  it("Deberia filtrar por genero Acción", () => {
    const result = filterData(data, "totalGenero", "Acción");
    expect(result).toStrictEqual(filter6);
  });
});

// test unitario para las estadisticas
describe("Estadisticas", () => {
  const estadisticas = {
    "16 Episodios": 6,
    "20 Episodios": 0,
    "21 Episodios": 0,
    "24 Episodios": 0,
    "32 Episodios": 0,
  };
  it("retorna la estadistica de fakeData", () => {
    const resultado = computeStats(data);
    expect(resultado).toEqual(estadisticas);
  });
});
