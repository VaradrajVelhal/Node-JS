const sumRequestHandler = (req, res) => {
  console.log("In Sum Request Handler", req.url);
  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  let result = 0;
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
  });
  res.setHeader("Content-Type", "text/html");
  res.write(`
      <html>
        <head><title>Practise Set</title></head>
        <body>
          <h1>Your Sum is ${result}</h1>
        </body>  
      <html>  
    `);
  return res.end();
};
//the result will be undefined
exports.sumRequestHandler = sumRequestHandler;
