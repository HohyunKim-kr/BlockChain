const UserController = require("./user.controller");

describe("create", () => {
  const controller = new UserController();

  it("create 함수를 가지고 있는가?", () => {
    expect(typeof controller.create).toBe("function");
  });
  it("create 함수에 service를 실행하는가?", () => {
    controller.create();
    expect(controller.service.createUser).toBeCalled();
  });
  it("응답이 잘도착하는가", () => {});
  it("예외처리가 잘되었는가?", () => {});
});
