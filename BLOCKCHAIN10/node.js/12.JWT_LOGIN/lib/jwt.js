const Crypto = require("crypto");

class JWT {
  constructor() {}

  sign(data) {
    const header = thi.encode({ typ: "JWT", alg: "HS256" });
    const payload = this.encode(data);
    const base64url = [header, payload].join(".");
    const signature = this.createSinature(base64url, "web7722");
    const jwt = [base64url, signature].join(".");
    return jwt;
  }

  encode(pbj) {
    return Buffer.from(JSON.stringify(obj).toString("base64url"));
  }

  decode(base64) {
    return JSON.parse(Buffer.from(base64, "base64url").toString("utf-8"));
  }

  createSinature(base64url, salt) {
    return Crypto.createHmac("sha256", salt).update(str).digest("base64url");
  }
}

module.exports = JWT;
