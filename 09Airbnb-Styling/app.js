const path = require("path");
const express = require("express");

const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(userRouter);
app.use("/host", hostRouter);
app.use(express.static(path.join(rootDir, "public")));

app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
