const request = require("supertest");
import app from "../app";
import { AppDataSource } from "../data-source";

const userName = "John Doe";
const userEmail = "jd@dis.com";
let user;

beforeAll(async () => {
  await AppDataSource.initialize();
  user = await request(app).post("/user").send({
    name: userName,
    email: userEmail,
  });
});

afterAll(async () => {
  await AppDataSource.destroy();
});

beforeEach(async () => {
  await AppDataSource.synchronize();
});

describe("Favorites ", () => {
  it("Should return 200 without any favorite", async () => {
    const response = await request(app).get("/favorites");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  it("Should create a favorite", async () => {
    //create favorite
    const response2 = await request(app).post("/favorites").send({
        userId: user.body.id,
        launchId: 1
    });
    expect(response2.status).toEqual(201);
    expect(response2.body.createdAt).toBeDefined();
    expect(response2.body.user.id).toEqual(user.body.id);
    expect(response2.body.user.email).toEqual(userEmail);
    expect(response2.body.user.name).toEqual(userName);
    expect(response2.body.launchId).toEqual(1);
    })

    it("Should get a favorite", async () => {
        //create favorite
        const favoriteCreatedResponse = await request(app).post("/favorites").send({
            userId: user.body.id,
            launchId: 1
        });

        const favoriteResponse = await request(app).get("/favorites/"+favoriteCreatedResponse.body.id)
        expect(favoriteResponse.status).toEqual(200);
        expect(favoriteResponse.body.id).toEqual(favoriteCreatedResponse.body.id);
        })
});

