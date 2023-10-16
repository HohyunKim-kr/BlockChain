const num = 10;
const str = "hello world";

const obj = { name: "ingoo" };
const obj2 = { name: "ingoo" };

console.log(obj === obj2);

// instanceof 객체 모양 비교

// typeof
// instanceof

class Controller {
  name;
  constructor(name) {
    this.name = name;
  }
}

class AuthController extends Controller {
  constructor() {
    super();
  }
}

class UserController extends Controller {
  constructor() {
    super();
  }
}

const authController = new AuthController();
const userController = new UserController();

const controller = new Controller("ingoo");
const controller2 = new Controller("web7722");
