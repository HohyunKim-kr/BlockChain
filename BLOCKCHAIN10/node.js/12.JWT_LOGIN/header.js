const header = {
  alg: "HS256",
  typ: "JWT",
};

const payload = {
  sub: "1234567890",
  name: "John Doe",
  iat: 1516239022,
};

// // json 형식 string 변환
// const headerString = JSON.stringify(header);
// // 버퍼로 변환
// const headerBuffer = Buffer.from(headerString);
// //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// const headerBase64 = headerBuffer.toString("base64url");

// 위의 코드 한줄로 인코딩
const encode = Buffer.from(JSON.stringify(header)).toString("base64");
// 디코딩
const decode = JSON.parse(Buffer.from(encode, "base64url").toString("utf-8"));

console.log(decode);

// payload

// 페이로드 인코딩
const encodePayload = Buffer.from(JSON.stringify(payload)).toString(
  "base64url"
);

console.log(encodePayload);
// 페이로드 디코딩
const decodePayload = JSON.parse(
  Buffer.from(encode, "base64url").toString("utf-8")
);

//JWT

const jwt = [encode, encodePayload].join(".");
// console.log(jwt);
