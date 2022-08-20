import app from "../src/app";
import connection from "../src/utils/connection";

const request = require("supertest");

beforeAll(async () => {
  await connection.create();
});

afterAll(async () => {
  await connection.close();
});

beforeEach(async () => {
  await connection.clear();
});

describe("API", () => {
  test("should return 200 on /user", async () => {
    const response = await request(app).get("/user");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "Hello World" });
  });
});
