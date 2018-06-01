const server = require("./controller/server.js");

server.start().then((port)=>console.log("We rolling on : http://localhost:"+port));
