// External Module
const express = require("express");
const userRouter = express.Router();

// Local Module
const { registeredHomes } = require("./hostRouter");

userRouter.get("/", (req, res) => {
  console.log(registeredHomes);

  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "Airbnb Home",
  });
});

module.exports = userRouter;
