const { UserKakaoRequestDTO } = require("./kakao.dto");
const { User } = require("../entity");

exports.KakaoLogin = async (userKakaoRequestDTO) => {
  try {
    if (!(userKakaoRequestDTO instanceof UserKakaoRequestDTO)) {
      throw new Error("이상한거 넣지마");
    }
    const { id } = userKakaoRequestDTO;
    const { nickname, profile_image, thumbnail_image } =
      userKakaoRequestDTO.properties;

    const user = User.build({
      id: id,
      nickname: nickname,
      profile_image: profile_image,
      thumbnail_image: thumbnail_image,
    });
    const response = await user.save();
    const result = new UserKakaoRequestDTO(response);
  } catch (e) {}
};
