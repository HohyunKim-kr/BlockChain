const userService = require("./kakao.service");
const { UserKakaoRequestDTO } = require("./kakao.dto");

exports.postKakaoLogin = async (req, res, next) => {
  try {
    const data = req.body;
    // const propeties = data.properties;
    const userKakaoReuestDTO = UserKakaoRequestDTO(data);
    const response = await userService.KakaoLogin(userKakaoReuestDTO);
    // await response = await userService.putUserdata();
    // console.log(data.id);
    // console.log(propeties.nickname);
    // console.log(propeties.profile_image);
    // console.log(propeties.thumbnail_image);
  } catch (e) {
    next(e);
  }
};
