const http = require("http");
const server = http.createServer((req, res) => {});
const port = 3001;
server.listen(port, () => {
  console.log(`http://localhost/${port}`);
});
