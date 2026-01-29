const path = require("path");
//external module
const express = require("express");
const userRouter = express.Router();

const rootDir = require("../utils/pathUtils");
userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
