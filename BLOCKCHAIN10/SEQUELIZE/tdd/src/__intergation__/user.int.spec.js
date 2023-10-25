const request = require("supertest");
const app = require("../app");

// supertest
describe("통합테스트 userController", () => {
  it("POST /users", async () => {
    // 요청
    const response = (await request(app).post("/users")).set(Content - type);
  });
});
