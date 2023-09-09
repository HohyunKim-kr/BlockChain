const path = require("path");
const fs = require("fs");

const TEMPLATE_DIR = "views";

const STATUS_MESSAGE = {
  200: "OK",
  404: "NOT FOUND",
};

class Response {
  version = "HTTP/1.1";
  statusCode;
  headers = {};
  body;

  constructor() {
    this.headers["Connection"] = "Close";
    this.headers["Content-Type"] = "text/html; charset=UTF-8";
  }

  setBody(_body) {
    this.body = _body;

    const bodyBuffer = Buffer.from(_body);
    const ContentLength = bodyBuffer.length;
    this.setHeaders("Content-Length", ContentLength);
    return this;
  }

  setStatus(_code) {
    this.statusCode = _code;
    return this;
  }

  setHeaders(key, value) {
    this.headers[key] = value;
    return this;
  }

  convertToHttpStartLine() {
    const statusCode = this.statusCode || 200;
    return `${this.version} ${statusCode} ${STATUS_MESSAGE[statusCode]}`;
  }

  convertToHttpHeaders() {
    const headers = [];
    for (const key in this.headers) {
      const message = `${key}: ${this.headers[key]}`;
      headers.push(message);
    }

    return headers.join("\r\n");
  }

  sendFile(filename) {
    const filepath = path.join(_direname, TEMPLATE_DIR, filname);
    const buffer = fs.readFileSync(filepath);
    const body = buffer.toString();
    this.send(body);
  }

  send(data) {
    if (!data) throw new Error("Data 내용이 비어있습니다.");
    this.setBody(data);
    this.end();
  }

  end() {
    const startline = this.convertToHttpStartLine();
    const headers = this.convertToHttpHeaders();
    this.statusCode = null;

    const message = [startline, "\r\n", headers, "\r\n\r\n", this.body].join(
      ""
    );
    console.log(message);
    return message;
  }
}

const res = new Response();

res.sendFile("index.html");
res.sendFile("view.html");
