const express = require('express');
const taskRouter = express.Router();
const controller = require("../controller/tasks");

taskRouter.route("/").post(controller.getData).get(controller.showData).put(controller.checkfunc).delete(controller.deleteFunc)

module.exports  = taskRouter; 