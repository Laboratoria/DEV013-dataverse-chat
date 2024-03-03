import { getApiKey, setApiKey,  removeApiKey} from "../src/lib/apiKey";

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    window.localStorage.setItem("llave", "Motis");
    expect(getApiKey()).toBe("Motis");
  });
});

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    setApiKey("Motis")
    const keyTestSet = window.localStorage.getItem("llave");
    expect(keyTestSet).toBe("Motis");
  });
});

describe("removeApiKey", () => {
  it("debería eliminar la API Key de localStorage", () => {
    window.localStorage.setItem("llave", "Motis");
    expect(removeApiKey()).not.toBe("Motis");
  });
  it("debería eliminar la API Key de localStorage", () => {
    window.localStorage.setItem("llave", "Motis");
    expect(removeApiKey()).toBe();
  });
});

