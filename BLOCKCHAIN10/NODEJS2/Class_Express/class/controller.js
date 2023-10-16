const Service = require("./service");
const service = new Service();

class Controller {

  constructor() {}

  getMain(req, res, next) {
    try {
      service.getMain();
    } catch (e) {
      next(e);
    }
  }
}

module.exports = Controller;
