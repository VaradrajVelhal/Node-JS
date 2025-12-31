const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("first dummy middle ware", req.path, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("second dummy middle ware");
  next();
});
// app.use((req, res, next) => {
//   console.log("third dummy middle ware");
//   res.send("<p>Hello</p>");
// });
app.get("/", (req, res, next) => {
  console.log("Handling slash for GET");
  res.send("<h1>Hello</h1>");
});
app.get("/contact-us", (req, res, next) => {
  console.log("Handling contact us  for GET");
  res.send(`
    <h1>Contact us</h1>
    <form action="contact-us" method = "post">
    <input type="text" name="name" placeholder = "enter your name"/>
    <input type="text" name="email" placeholder = "enter your email"/>
    <input type="submit"/>
    </form>
    `);
});
app.post("/contact-us", (req, res, next) => {
  console.log("Handling contact us  for POST");
  res.send("<h2>We will contact you</h2>");
});
const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
