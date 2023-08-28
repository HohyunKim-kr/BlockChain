// 절대경로
const path = require("path");

console.log(__dirname);
// 내 파일의 위의 폴더

console.log(__filename);
// 내 현재 파일까지

const filename = "README.md";
const file = __dirname + "\\" + filename;
console.log(file);

console.log(path);
const file2 = path.join(__dirname, filename);
console.log("file2 : ", file2);

console.log(path.sep);
