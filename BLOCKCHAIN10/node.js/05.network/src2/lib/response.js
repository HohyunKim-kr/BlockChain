const fs = require("fs");
const path = require("path");

const statusMessage = {
  200: "OK",
  400: "NOT FOUND",
};

const message = (body, request, statusCode = "200") => {
  const bodyBuffer = Buffer.from(body);

  return `HTTP/1.1 ${statusCode} ${statusMessage[statusMessage]}
Connection: Close
Content-Type: text/html; charset=UTF-8
Content-Length: ${bodyBuffer.length}
    
${body}`;
};

const response = (socket) => {
  return {
    notFound: (body) => {
      const responseMessage = message(body, null, 404);
      socket.write(responseMessage);
    },
    send: (body) => {
      socket.write(message(body));
    },
    sendFile: (filename) => {
      // filename 기분으로 views 디렉토리 안에서
      const filePath = path.join(__dirname, "..", "views", filename);
      fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        console.log(data.toString());
        const responseMessage = message(data.toString());
        socket.write(responseMessage);
      });
    },
  };
};

module.exports = response;
