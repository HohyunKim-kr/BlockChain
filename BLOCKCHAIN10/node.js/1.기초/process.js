console.log(process.version);
console.log(process.arch);
console.log(process.platform);
console.log(process.pid);

setInterval(() => {
  console.log("실행되나~?", process.pid);
}, 1000);
