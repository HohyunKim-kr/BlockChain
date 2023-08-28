const fs = require("fs");
const path = require("path");

const FILE_NAME = "querystring.txt";
const filepath = path.join(__dirname, FILE_NAME);

fs.readFile(filepath, (err, data) => {
  if (err) throw err;
  const result = data
    .toString()
    .split("&")
    .map((v) => {
      const [key, value] = v.split("=");
      return [key, value];
    })
    .reduce((acc, v) => {
      const [key, value] = v;
      acc[key] = value;
      return acc;
    }, {});

  console.log(result);
});
