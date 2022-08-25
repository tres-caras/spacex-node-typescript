const request = require("supertest");
import app from "../app";

describe("Launches", () => {
  it("Should return 200 without any favorite", async (done) => {
    const response = await request(app).get("/launches");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
    done()
  }, 30000);
});

