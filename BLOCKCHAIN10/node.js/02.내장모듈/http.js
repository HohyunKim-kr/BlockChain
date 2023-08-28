const fs = require("fs");
const path = require("path");

const FILE_NAME = "http.txt";
const filepath = path.join(__dirname, FILE_NAME);

fs.readFile(filepath, (err, data) => {
  const key = ["method", "path", "version", "Content-type"];
  if (err) throw err;
  const result = data
    .toString()
    .split("\n")
    .filter((v) => v);

  console.log(result);
});
