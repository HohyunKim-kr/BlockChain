const UserService = require("./user.service");

decribe("user Service", () => {
  let userService = null;
  let User = {
    create: jest.fn(),
  };

  beforEach(() => {
    userService = new UserService(User);
  });
  describe("createUser", () => {
    it("성공적인 부분", async () => {
      // 매개변수에서 dto를 받는다
      // dto를 활용해서 Entity에서 User의 Create 메서드를 호출한다
      // 호출한 결과물을 가지고 return 한다.
      User.create.mockResolvedValue({ id: "web7722", name: "ingoo" });
      const dto = { id: "1", pw: "1234", name: "ingoo" };
      const responseBody = await userService.createUser(dto);

      expect(User.create).toBeCalledWith(dto);
      expect(responseBody).toStrictEqual({ id: "web7722", name: "ingoo" });
    }),
      it("실패 부분", () => {});
  });
});
