const service = require("./service");

exports.main = (req, res, next) => {
  try {
    service.main();
  } catch (e) {
    next(e);
  }
};
