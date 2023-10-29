require("dotenv").config();

const REST_API_KEY = process.env.REST_API_KEY;
const KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;

exports.login = async (req, res, next) => {
  try {
    const redirectURI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
    res.redirect(redirectURI);
  } catch (e) {
    next(e);
  }
};

exports.callback = async (req, res, next) => {
  try {
    const { code } = req.query;
    const host = "https://kauth.kakao.com/oauth/token";
    // Content-type: application/x-www-form-urlencoded;charset=utf-8
    const body = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`;
    const response = await global.axios.post(host, body, {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    });
    // console.log(response);
    const {
      data: { access_token },
    } = response;
    const userinfo = await global.axios.get(
      "https://kapi.kakao.com/v2/user/me",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    res.cookie("hohyun", userinfo.data);

    res.redirect("/auth/login");

    // 만약 로그인이 되어 있다면 바로 redirect
    // 아니라면
    // res.redirect("/login");
    const data = await global.axios.post(
      "http://localhost:4000/auth/kakao/login",
      userinfo.data
    );

    console.log(data);
    // const frontdata = await global.axios.get(
    //   "http://localhost:3000/auth/login",
    //   userinfo.data
    // );

    // res.send();
  } catch (e) {
    console.log(e.message);
  }
};
