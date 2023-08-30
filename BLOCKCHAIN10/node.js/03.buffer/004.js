const { log } = require("console");
const fs = require("fs");

const writeStream = fs.createWriteStream("./REQDME2.md");

writeStream.on("finish", () => {
  console.log("end");
});

writeStream.write("#파일만들기이잉ㅇ");
writeStream.write("#어농이오렌지");
writeStream.write("#강대표 내말들어");
writeStream.write("#화성갈끄니까~!!@");
writeStream.write("#도지xfalconxxtothemoon");
writeStream.write("#비상탈출!!");
writeStream.write("#hell 로!!");
writeStream.end();
