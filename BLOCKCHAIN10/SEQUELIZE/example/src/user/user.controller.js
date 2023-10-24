const userService = require("./user.service");

// id, pw, name
exports.create = async (req, res, next) => {
  try {
    const signupDTO = req.body; // DTO
    const userEntity = {
      id: signupDTO.userid,
      pw: signupDTO.userpw,
      name: signupDTO.username,
    };
    const response = await userService.postSignup(userEntity);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const userInfoDTO = req.body; // DTO
    const userEntity = {
      id: userInfoDTO.userid,
      pw: userInfoDTO.userpw,
      name: userInfoDTO.username,
    };
    const response = await userService.getProfile(userEntity);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const userListDTO = req.body; // DTO
    const userEntity = {
      id: userListDTO.userid,
      pw: userListDTO.userpw,
      name: userListDTO.username,
    };
    const response = await userService.getUserList(userEntity);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

exports.update = async (req, res, next) => {
  try {
    const userinfoUpdateDTO = req.body; // DTO
    const userEntity = {
      id: userinfoUpdateDTO.userid,
      pw: userinfoUpdateDTO.userpw,
      name: userinfoUpdateDTO.username,
    };
    const response = await userService.putProfile(userEntity);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const userDeleteDTO = req.body; // DTO
    const userEntity = {
      id: userDeleteDTO.userid,
      pw: userDeleteDTO.userpw,
      name: userDeleteDTO.username,
    };
    const response = await userService.deleteUser(userEntity);
    res.json(response);
  } catch (e) {
    next(e);
  }
};
