const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      pw: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }
    // {
    //   modelName: "Users",
    // }
  );
};

// entity

// module.exports = (sequelize) => {
//   class User extends Model {}

//   // 1. 테이블에 대한 필드내용을 정의
//   // 2. Users users, user, t_user
//   User.init(
//     {
//       id: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         primaryKey: true,
//       },
//       pw: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       modelName: "Users",
//     }
//   );
//   return User;
// };
