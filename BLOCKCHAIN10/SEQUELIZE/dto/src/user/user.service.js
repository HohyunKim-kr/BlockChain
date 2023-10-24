const { UserCreateRequestDTO, UserCreateResponseDTO } = require("./user.dto");
const { User } = require("../entity");

exports.createUser = async (userCreateRequestDTO) => {
  try {
    if (!(userCreateRequestDTO instanceof UserCreateRequestDTO)) {
      throw new Error("이상한거 넣지마");
    }
    const { userid, userpw, username } = userCreateRequestDTO;

    const user = User.build({
      id: userid,
      pw: userpw,
      name: username,
    });

    const response = await user.save();

    const result = new UserCreateResponseDTO(response);

    // const response = await User.create({ id: "asda", pw: "asdas" });

    return result;
  } catch (e) {
    throw new Error(e.message);
  }
};
