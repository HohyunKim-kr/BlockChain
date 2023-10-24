const { db: config } = require("../config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

require("./user/user.entity")(sequelize, Sequelize.DataTypes);

const { User } = sequelize.models;

// Model.findAll({
//   attributes: ["foo", "bar"],
// });
module.exports = {
  sequelize,
  User,
};
