const express = require("express");
const router = express.Router();
const kakaologinRouter = require("./kakaologin/kakao.route");

router.get("/", (req, res) => {
  res.render("index.html");
});

router.use("/auth", kakaologinRouter);

module.exports = router;
