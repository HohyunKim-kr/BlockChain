class Service {
  constructor() {}
  hello() {
    console.log("hello");
  }
  static aa() {
    "static aa call";
  }
}

class Controller {
  constructor(service) {
    this.service = service;
  }
  start() {
    this.service.hello();
  }
}

const service = new Service();
const controller = new Controller(service);
controller.start();
