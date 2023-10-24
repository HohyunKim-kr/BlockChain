module.exports = (sequelize, DataTypes) => {
  sequelize.define(
    "User",
    {
      id: { type: DataTypes.STRING(30), allowNyll: false, primaryKey: true },
      pw: { type: DataTypes.STRING(30), allowNyll: false },
      name: { type: DataTypes.STRING(30), allowNyll: false },
    },
    {
      freezeTableName: true,
    }
  );
};
