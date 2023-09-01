const net = require("net");
const getRequest = require("./lib/request");
const getResponse = require("./lib/response");

const server = net.createServer();

server.on("connection", (socket) => {
  let buffer = Buffer.alloc(0);
  socket.on("data", (chunk) => {
    buffer = Buffer.concat([buffer, chunk]);
    const request = getRequest(buffer);
    const response = getResponse(socket);

    if (request.uri === "/") {
      response.sendFile("index.html");
    }
  });
});

// port  -> 어떤 프로세스가 돌고 있는지 알아야한다.
// listen 상태가 되면 callback 함수가 실행된다.
server.listen(3000, () => {
  console.log("Server Listening on port 3000");
});
