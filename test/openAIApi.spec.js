import { communicateWithOpenAI } from "../src/lib/openAIApi.js";
//desactivamos  las reglas de eslint para este archivo para usar console.log
/* eslint-disable */

//establecemos una función ficticia jest.fn()
global.fetch = jest.fn(() =>
// devolvemos una promesa resuelta con un objeto con 
// una pñropiedad estatus y una funcion json  
Promise.resolve({
    status: 200,
    // este json devuelve una promesa con objeto vacio
    json: () => Promise.resolve({}),
  })
);
// aqui agrupamos los test para Comunicate...
describe("OpenAI", () => {
  it("Existe communicateWithOpenAI", () => {
    const callPromise = communicateWithOpenAI();
    expect(callPromise).toBeInstanceOf(Promise);
  });

  it("La api responde correctamente", async () => {
    const response = {
      choices: [
        {
          message: {
            role: "system",
            content: "Hola, como estas?",
          },
        },
      ],
    };
    //establecemos una respuesta ficticia para la función fetch usando mockResolvedValueOnce
    global.fetch.mockResolvedValueOnce({
      // la funcion json  devuelve una promesa resuelta con el objeto response
      json: () => Promise.resolve(response),
    });
    const captureData = communicateWithOpenAI("Itaewon Class", "hola")
      .then((res) => res.json())
      .then((data) => {
        // console.log("CAPTURE DATA",captureData)
        console.log("DATA", data);
        //console.log("CAPTURE DATA", captureData);

        //Se espera que los datos obtenidos sean iguales a response
        expect(data).toEqual(response);
        console.log("response", response);
      });
    return captureData;
  });

  it("La solicitud de la Api es exitosa", async () => {
    const kDrama = "Itaewon Class";
    const input = "hola";

    const response = await communicateWithOpenAI(kDrama, input);
    expect(response).toEqual({
      status: 200,
      json: expect.any(Function),
    });
  });
});
