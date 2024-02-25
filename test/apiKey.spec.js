// test/apiKey.spec.js

import { setApiKey } from "../src/lib/apiKey.js";

// import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    // Desarrolla el test correspondiente aquí, el expect(getApiKey).toBe()
  });
});

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    // setApiKey('keydeprueba')
    const keyTest = window.localStorage.getItem("llave") === "keydeprueba";
    expect(setApiKey("keydeprueba").toBe(keyTest));
    // Desarrolla el test correspondiente aquí
  });
});
