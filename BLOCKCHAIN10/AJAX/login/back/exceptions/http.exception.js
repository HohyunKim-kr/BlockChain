class HttpException extends Error {
  constructor(message, error) {
    super(message);
    this.error = error;
    this.statusCode = statusCode;
    this.timestamp = new Date().toLocaleString("en-US", {
      timezone: "Asia/Seoul",
      hour12: false,
    });
  }
}

class Unauthorization extends HttpException {}

modul.exports = HttpException;
