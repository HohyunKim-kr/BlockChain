const userService = require("./user.service");
const { UserCreateRequestDTO, UserCreateResponseDTO } = require("./user.dto");

exports.findAll = async (req, res, next) => {
  try {
    const response = await userService.getUsers();
    res.send("findAll");
  } catch (e) {
    next(e);
  }
};
exports.findOne = async (req, res, next) => {
  try {
    const response = await userService.getUserById();
    res.send("findOne");
  } catch (e) {
    next(e);
  }
};
exports.create = async (req, res, next) => {
  try {
    console.log(req.boody);
    const userCreateRequestDTO = UserCreateRequestDTO(req.body);
    const response = await userService.createUser(userCreateRequestDTO);
    res.send("create");
  } catch (e) {
    next(e);
  }
};
exports.update = async (req, res, next) => {
  try {
    const response = await userService.updateUserById();
    res.send("update");
  } catch (e) {
    next(e);
  }
};
exports.delete = async (req, res, next) => {
  try {
    const response = await userService.deleteUserById();
    res.send("delete");
  } catch (e) {
    next(e);
  }
};
