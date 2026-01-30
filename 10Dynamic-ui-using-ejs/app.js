// Core Module
const path = require("path");

// External Module
const express = require("express");

// Local Modules
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter"); // ✅ FIX
const rootDir = require("./utils/pathUtil");

const app = express();

// View Engine
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(userRouter);
app.use("/host", hostRouter);

// Static Files
app.use(express.static(path.join(rootDir, "public")));

// 404
app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
