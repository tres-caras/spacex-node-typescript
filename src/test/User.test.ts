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

describe("User", () => {
  it("Should return 200 without any users", async () => {
    const response = await request(app).get("/user");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  it("Should create a User", async () => {
    const response = await request(app).post("/user").send({
      name: "John Doe",
      email: "jd@dis.com",
    });
    expect(response.status).toEqual(201);
    expect(response.body.email).toEqual("jd@dis.com");
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toEqual("John Doe");
  });

  it("Should get users ", async () => {
    const response = await request(app).post("/user").send({
      name: "John Doe",
      email: "jd@dis.com",
    });
    expect(response.status).toEqual(201);

    const response2 = await request(app).get("/user");
    expect(response2.status).toEqual(200);
    expect(response2.body.length).toBeGreaterThan(0);
  });

  it("Should get a user", async () => {
    const response = await request(app).post("/user").send({
      name: "John Doe",
      email: "jd2@dis.com"
    });
    expect(response.status).toEqual(201);

    const response2 = await request(app).get("/user/"+response.body.id);
    expect(response2.status).toEqual(200);
    expect(response2.body.id).toEqual(response.body.id);
  });
});
