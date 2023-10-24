const { User: UserRepository } = require("../entity");
/*
    signupDTO {
        username:"",
        userid:"",
        userpw:""
    }
  */

exports.postSignup = async (userEntity) => {
  try {
    const result = await UserRepository.create(userEntity, {
      where: { id: id },
    });
    console.log(result + "userService signup");

    return result;
  } catch (e) {
    console.log(e.message, "service create err");
  }
};
exports.getProfile = async (userEntity) => {
  try {
    const result = await UserRepository.getProfile(userEntity, { attribute });

    return result;
  } catch (e) {
    console.log(e.message, "service findOne err");
  }
};
exports.getUserList = async (userEntity) => {
  try {
    const result = await UserRepository.getUserList(userEntity);
    return result;
  } catch (e) {
    console.log(e.message, "service  getUserList err");
  }
};
exports.putProfile = async (userEntity) => {
  try {
    const result = await UserRepository.putProfile(userEntity);
    return result;
  } catch (e) {
    console.log(e.message, "service putProfile err");
  }
};
exports.deleteUser = async (userEntity) => {
  try {
    const result = await UserRepository.deleteUser(userEntity);
    return result;
  } catch (e) {
    console.log(e.message, "service delete err");
  }
};
