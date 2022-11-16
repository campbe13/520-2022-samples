const request = require("supertest");
const app = require("../app");
const DB = require("../db/db");

jest.mock("../db/db");

describe("GET /quotes ", () => {
  test("It should respond with a json array", async () => {
    jest.spyOn(DB.prototype, "readAll").mockResolvedValue(
      [{quote: "dunno", author: "me"}]);
    const response = await request(app).get("/quotes");
    //if plain text, use text, if json use body
    expect(response.body).toEqual([{quote: "dunno", author: "me"}]);
    expect(response.statusCode).toBe(200);
    expect(response.type).toEqual("application/json");
  });
});

describe("POST /quote ", () => {
  test("It should respond with a 201", async () => {
    jest.spyOn(DB.prototype, "create").mockResolvedValue(
      {insertedId: "1"});
    const response = await request(app)
      .post("/quote")
      .send({quote: "dunno", author: "me"})
      .set("Accept", "application/json");
    //if plain text, use text, if json use body
    expect(response.text).toEqual('Quote added');
    expect(response.statusCode).toBe(201);
  });
});