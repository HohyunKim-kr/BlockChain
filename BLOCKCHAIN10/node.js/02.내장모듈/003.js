const fs = require("fs");
const path = require("path");

const FILE_NAME = "README.md";
const file = path.join(__dirname, FILE_NAME);
console.log(file);

fs.readFile(file, (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
console.log();
