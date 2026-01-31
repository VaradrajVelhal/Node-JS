// External Module
const express = require("express");
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");

const registeredHomes = [];

hostRouter.get("/add-home", (req, res) => {
  res.render("addHome", { pageTitle: "Add Home to Airbnb" });
});

hostRouter.post("/add-home", (req, res) => {
  console.log("Home Registration successful for:", req.body);

  registeredHomes.push({
    houseName: req.body.houseName,
  });

  res.render("homeAdded", { pageTitle: "Home Added Successfully" });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
