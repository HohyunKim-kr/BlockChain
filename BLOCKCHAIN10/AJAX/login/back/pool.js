const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "hohyun1022",
  password: "Young1022!",
  database: "test_db",
});

module.exports = pool;
