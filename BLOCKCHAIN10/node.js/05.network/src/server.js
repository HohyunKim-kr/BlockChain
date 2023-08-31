const net = require("net");
// console.log(net);

const server = net.createServer();
// console.log(server);

const message = `HTTP/1.1 200 OK
Vary: Origin
Access-Control-Allow-Credentials: true
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Thu, 31 Aug 2023 02:09:17 GMT
ETag: W/"109-18a495a1d6c"
Date: Thu, 31 Aug 2023 02:10:09 GMT
Connection: keep-alive
Keep-Alive: timeout=5

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        Hello world!
</script>
</body>
</html>
`;

const START_LINE_NAMES = ["method", "uri", "version"];
// ['GET', ]

let buffer = Buffer.alloc(0);
server.on("connection", (socket) => {
  socket.on("data", (chunk) => {
    buffer = Buffer.concat([buffer, chunk]);
    // 1. 먼저 header 와 body를 완벽하게 나누고 시작
    const headerEndInex = chunk.indexOf("\r\n\r\n");
    if (headerEndInex !== -1) {
    } else {
      const headerBuffer = chunk.slice(0, headerEndInex);
      const bodyBuffer = chunk.slice(headerEndInex + 4);

      const headerLine = headerBuffer.toString().split("\r\n");
      const startLine = headerLine
        .shift()
        .split(" ")
        .map((value, index) => {
          return [START_LINE_NAMES[index], value];
        })
        .reduce((acc, line) => {
          const [key, value] = line;
          acc[key] = value;
          return acc;
        }, {});

      const headers = headerLine.reduce((acc, line) => {
        const [key, value] = line.split(": ");
        acc[key] = value;
        return acc;
      }, {});
      /*
        method : 'GET'
        path :'/'
        version : 'http/1.1'
    */
      if (parseInt(headers["Conetent-Length"]) === bodyBuffer.length) {
        buffer = Buffer.alloc(0);
        socket.write(message);
        socket.end();
      }
    }

    // socket.write(message);
    // socket.end();
  });
});

// port  -> 어떤 프로세스가 돌고 있는지 알아야한다.
// listen 상태가 되면 callback 함수가 실행된다.
server.listen(3000, () => {
  console.log("Server Listening on port 3000");
});
