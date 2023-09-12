// const express = require("express");
require("dotenv").config();
const net = require("net");
const Request = require("./lib/request");
const Response = require("./lib/response");
const { SERVER_PORT, NODE_ENV } = process.env;
const PORT = SERVER_PORT || 3000; // .env 정보가 없을 경우

const server = net.createServer();

server.on("connection", (socket) => {
  console.log("ESTABLISHED");

  socket.on("data", (chunk) => {
    const req = new Request(chunk);
    const res = new Response(socket);

    if (req.headers.method === "GET" && req.headers.uri === "/boards/list") {
      res.sendFile("list.html");
    } else if (
      req.headers.method === "GET" &&
      req.headers.uri === "/boards/write"
    ) {
      res.sendFile("write.html");
    } else if (
      req.headers.method === "POST" &&
      req.headers.uri == "/boards/writes"
    ) {
      console.log(req.headers);
      // res.send("OK");
      res.redirect("/boards/list");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
