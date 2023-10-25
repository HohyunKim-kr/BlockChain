// module.exports = (service) => {
//   return {
//     create: () => {},
//   };
// };

class UserController {
  constructor(service) {
    this.service = service;
  }
  create() {
    try {
      this.service.createUser();
    } catch (e) {
      next(e);
    }
  }
}

module.exports = UserController;
