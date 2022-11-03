import request from "supertest"
import app from "../app.js"

describe ("GET /api", () => {
  test("Should respond with JSON", async () =>  {
    // ?? data
    const query  = {
      name: "Fozzie"
    }
    const result = {
      message: "Hello Fozzie"
    }
    resp = await request(app).get("/api").send(query)
    expect(resp.statusCode).tobe(200)
    expect(resp.body).toEqual(result)
  });
});