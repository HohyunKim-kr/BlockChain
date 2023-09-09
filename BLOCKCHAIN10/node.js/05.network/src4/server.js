require("dotenv").config();
const net = require("net");
const { SERVER_PORT } = process.env;
const PORT = SERVER_PORT || 3000;

const server = net.createServer();

server.on("connection", (socekt) => {
  console.log("ESTABLISHED");

  socekt.on("data", (chunk) => {
    console.log(chunk.toString());
  });
});

server.listen(PORT, () => {
  console.log(`Server Listenig on Port ${PORT}`);
});
