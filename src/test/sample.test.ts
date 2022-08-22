import request from "supertest";
import app from "../app";

describe('Sample Test', () => {
    it('should pass', () => {
        expect(true).toBe(true);
    });

    it('should return a 200', () => {
        return request(app)
            .get('/launches')
            .expect(200);
    });
})