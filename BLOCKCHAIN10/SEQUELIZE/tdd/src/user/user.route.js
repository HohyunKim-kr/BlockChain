const express = require("express");
const router = express.Router();

const UserService = require("./user.service");
const UserController = require("./user.controller");

const userService = new UserService();
const userController = new UserController(userService);

router.post("/", userController.create);

module.exports = router;
