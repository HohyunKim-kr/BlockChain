// const fs = require("fs");

// const fs = {
//   readFile: () => {},
// };
const fs = require("fs");

class Fs {
  readFile(path, callback) {
    const readStream = fs.createReadStream(path, { highWaterMark: 8 });
    readStream.on("data", (buffer) => {
      data.push(buffer);
    });

    readStream.on("end", () => {
      callback(null, Buffer.concat(data));
    });

    readStream.on("error", (error) => {
      callback(error, null);
    });
  }
}

module.exports = new Fs();
