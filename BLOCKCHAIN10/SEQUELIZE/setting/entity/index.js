// Connection
// const Sequelize = require("sequelize");
const { Sequelize, DataTypes } = require("sequelize");
// const user = require("./user.entity");

const db = {
  database: "test_db",
  username: "hohyun1022",
  password: "Young1022!",
  host: "127.0.0.1",
  port: "3306",
  dialect: "mysql",
};

const sequelize = new Sequelize(db.database, db.username, db.password, db);

// 테이블에 대한 정보를 입력해줘야한다.
require("./user.entity")(sequelize, DataTypes);

// create
// findOne
// findAll
// update
// delete

// sequelize.models.user

sequelize.sync({ force: true }).then(async () => {
  const { User } = sequelize.models;
  await User.create({ id: "web7722", name: "ingoo", pw: "1234" });
  await User.create({ id: "web7733", name: "indds", pw: "1234" });
  await User.create({ id: "web77233", name: "indds", pw: "1234" });

  const list = await User.findAll({
    raw: true,
    where: {
      id: "web7722",
    },
  });

  const user1 = await User.findOne({
    raw: true,
    where: {
      id: "web7722",
    },
  });

  //UPDATE users set id='web7766' where id='wer231

  await User.update(
    { id: "wer1232" },
    {
      where: {
        id: "Web213123",
      },
    }
  );

  await User.destroy({
    weher: {
      id: "web7766",
    },
  });

  console.log(list[0]);

  console.log(list);

  console.log("connection");
});
