// 테스트를 그룹화 하기 위해 만들어진 친구
// describe("글자를 띄우고 호출할래~", () => {});

// 하나하나 단위를 테스트하기 위해 만들어진 메서드
// it("나는 1+1이다~", () => {});
// test("설명설며", () => {});
const UserController = require("./src/user/user.controller");
const service = require("./src/user/user.service");

describe("User Controller 를 테스트 하겠음..", () => {
  const mockFn = jest.fn();
  const service = {
    createUser: jest.fn(),
  };
  const controller = new UserController(service);
  it("Create 메서드가 존재합니까?", () => {
    expect(typeof controller.create).toBe("function");
  });

  it("Create 메서드에서 Service.createUser가 호출됩니까?", () => {
    controller.create();
    expect(controller.service.createUser).toBeCalled();
  });

  it("mock 함수 알아보기", () => {
    console.log(typeof mockFn);
    mockFn("인자값 ~~~");

    // expect(mockFn).toBeCalledWith("인자값 ~~");
    // expect(mockFn).tobeCalled();
  });
});
1;
