const JWT = require("../../lib/jwt");
const userService = require("../user/user.service");
const jwt = new JWT();

exports.auth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return next();

    const payload = jwt.verify(token, "web7722");
    console.log("payload: ", payload);

    const user = await userService.findOneByUserId(payload.id);
    console.log(user);
    req.user = user;
    next();
  } catch (e) {
    next();
  }
};
