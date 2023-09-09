const { log } = require("console");

const NEW_LINE = "\r\n";
const GUILOTINE = NEW_LINE + NEW_LINE;

class Request {
  constructor(buffer) {}

  getRequestMessage(buffer) {
    const [header, ...rest] = buffer.toString().split(GUILOTINE);
    const body = rest.join(GUILOTINE);
  }
}

module.exports = Request;
console.log("Hello World!");
