const request = require("supertest");
import app from "../app";
import { AppDataSource } from "../data-source";

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

beforeEach(async () => {
  await AppDataSource.synchronize();
});

describe("Sample Test", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("should return a 200", () => {
    return request(app).get("/user").expect(200);
  });
});
