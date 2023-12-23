const express = require('express');
const userRouter = express.Router();
const controller = require("../controller/user.js");

userRouter.route("/").post(controller.addUser)

module.exports = userRouter;