const boardService = require("./board.service");

exports.getList = async (req, res, next) => {
  try {
    const result = await boardService.getFindAll();
    res.render("board/list.html", {
      list: result,
    });
  } catch (e) {
    next(e);
  }
};

exports.getView = async (req, res, next) => {
  try {
    const { id } = req.query;
    const result = await boardService.getFindOne(id);
    console.log(result);
    res.render("board/view.html", {
      data: result,
    });
  } catch (e) {
    next(e);
  }
};
