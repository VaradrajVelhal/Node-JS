//core modules
// const http = require("http");//we dont need this anymore in express
//external module
const express = require("express");
//local module
const requestHandler = require("./user");

const app = express();
app.use("/submit-details", (req, res, next) => {
  console.log("came in second middleware", req.url, req.method);
  res.send("<p>Hello your response came </p>");
});
app.use("/", (req, res, next) => {
  console.log("came in first middleware", req.url, req.method);
  res.send("<p>came from first middleware</>");
  next();
});
// const server = http.createServer(app);
//we dont need commented code anymore.
const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running on address http://localhost:${PORT}`);
// });
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
