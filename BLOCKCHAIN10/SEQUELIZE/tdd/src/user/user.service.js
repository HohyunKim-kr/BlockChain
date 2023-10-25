class UserService {
  constructor(User) {
    this.User = User;
  }

  createUser(dto) {
    const responseBody = this.User.create(dto);
    return responseBody;
  }
}

module.exports = UserService;
