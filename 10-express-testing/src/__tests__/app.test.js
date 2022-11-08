import request from "supertest"
import app from "../app.js"

describe ("GET /api", () => {
  test("Should respond with 404", async () =>  {
    let resp = await request(app).get("/api")
    expect(resp.statusCode).toBe(404)
  });
});

describe ("GET /api/?name=Fozzie", () => {
  test("Should respond with JSON", async () =>  {
    let result  = { message: "Hello Fozzie"}
    let resp = await request(app).get("/api/?name=Fozzie")
    expect(resp.statusCode).toBe(200)
    expect(resp.body).toEqual(result)
  });
});
// fix code ??
describe ("GET /api/?name=", () => {
  test("Should respond with 404", async () =>  {
    let resp = await request(app).get("/api/?name=")
    expect(resp.statusCode).toBe(404)
  });
});

describe ("GET /api/?xyzname=Fozzie", () => {
  test("Should respond with 404", async () =>  {
    let resp = await request(app).get("/api/?xyzname=Fozzie")
    expect(resp.statusCode).toBe(404)
  });
});
describe("POST /api/addname ", () => {
  test("It should respond with 201", async () => {
    //data not really needed
    const data = {
      name: "Kermit"
    };
    const response = await request(app).post("/api/addname").send(data);
    expect(response.statusCode).toBe(201);
  });
});
describe("GET /api/addname/gonzo ", () => {
  test("It should respond with 201", async () => {
    let result  = { message: "Hello gonzo"}
    const response = await request(app).post("/api/addname/gonzo");
    expect(response.statusCode).toBe(201);
    expect(resp.body).toEqual(result)
  });
});
