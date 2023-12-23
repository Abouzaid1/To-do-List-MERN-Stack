const express = require('express');
const authRouter = express.Router();
const controller = require("../controller/user.js");

authRouter.route("/").post(controller.authCheck)

module.exports = authRouter;