const userService = require("./user.service");

exports.getLogin = (req, res) => {
  res.render("login.html");
};

exports.getLogout = (req, res) => {
  res.clearCookie("token"); //cookie를 지우는 원리 파악해야함
  res.redirect("/");
};

exports.postLogin = async (req, res, next) => {
  try {
    const { user_id, user_pw } = req.body;
    const result = await userService.postLogin(user_id, user_pw);
    if (!result.isLogin) return res.redirect("/");
    // 로그인이 성공했을 때 쿠키를 만드는 작업
    // res.setHeader("token", result.data);
    res.cookie(
      "token",
      result.data,
      (maxAge = 60 * 10),
      (domain = "127.0.0.1"),
      (path = "/")
    );
    res.redirect("/");
  } catch (err) {
    next();
  }
};
