const Crypto = require("crypto");

// 단방향 암호화 (통신 x 암호학 >> )
// SHA256

const str =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ";

const salt = "web7722";
const signature = Crypto.createHmac("sha256", salt)
  .update(str)
  .digest("base64url");

console.log(signature);

const jwt = [str, signature].join(".");
console.log(jwt);
