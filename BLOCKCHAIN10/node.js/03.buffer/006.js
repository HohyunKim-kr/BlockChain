const fs = require("./005");
console.log(fs);

fs.readFile("./Test.md", (err, data) => {
  if (err) throw err;
  console.log(data);
});
