const { log } = require("console");
const fs = require("fs");
fs.writeFile("output.txt", "Writing File", (err) => {
  if (err) {
    console.log("Error occuered.");
  } else {
    console.log("File Written Sucessfully.");
  }
});
