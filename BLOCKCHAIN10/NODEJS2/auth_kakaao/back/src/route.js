const express = require("express");
const router = express.Router();
const kakaologinRouter = require("./kaokalogin/kakao.route");

router.use("/auth", kakaologinRouter);

module.exports = router;
