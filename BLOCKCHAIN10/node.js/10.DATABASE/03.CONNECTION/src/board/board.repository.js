const Board = require("./board.entity");
const pool = require("../../promisePool");

exports.findAll = async () => {
  try {
    const sql = "select * from boards";
    const [result] = await pool.query(sql);
    return result;
  } catch (e) {
    throw new Error(`DB 오류! ${e.message}`);
  }
};

exports.findOne = async (id) => {
  try {
    const sql = `select * from boards where id=${id}`;
    const [result] = await pool.query(sql);
    return result;
  } catch (e) {
    throw new Error(`findone 오류! ${e.message}`);
  }
};
