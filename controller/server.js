const Express = require("express");
const app = Express();

const router = require("./router.js");
const config = require("./config.js");

const start = function(){
  return new Promise((ok,notok)=>{
    router(app)
      .then((newapp)=>newapp.listen(config.port))
      .then(ok(config.port));
  })
}

module.exports = {
  start
}
