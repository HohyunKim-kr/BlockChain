class UserKakaoRequestDTO {
  userid;
  nickname;
  profile_image;
  thumbnail_image;
  constructor(data) {
    this.userid = data.id;
    this.nickname = data.properties.nickname;
    this.profile_image = data.properties.profile_image;
    this.thumbnail_image = data.properties.thumbnail_image;
  }
}

module.exports = { UserKakaoRequestDTO };
