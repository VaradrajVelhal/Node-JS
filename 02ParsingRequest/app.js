const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Enter Your Details:</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br>'
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female" />'
    );
    res.write('<br><input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("contnent-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Products</title></head>");
    res.write("<body><h1>Check out our products</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    req.on("data", (chunk) => {
      console.log(chunk);
    });
    fs.writeFileSync("user.txt", "Varadraj Velhal ");
    res.statusCode = 302;
    res.setHeader("location", "/");
  }
  res.setHeader("contnent-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My name</title></head>");
  res.write("<body><h1>Varadraj Rajendra Velhal</h1></body>");
  res.write("</html>");
  res.end();
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
