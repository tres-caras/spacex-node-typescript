const request = require("supertest");
import app from "../app";
import { TestDataSource } from "../data-source";

beforeAll(async () => {
  await TestDataSource.initialize();
});

afterAll(async () => {
  await TestDataSource.destroy();
});

describe("Sample Test", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("should return a 200", () => {
    return request(app).get("/user").expect(200);
  });
});
