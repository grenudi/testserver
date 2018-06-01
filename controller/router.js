const Path = require("path");
const Express = require("express");

const set = function(app){
  return new Promise((ok,notok)=>{
    app.get("/",(req,res)=>{
      res.sendFile(Path.join(__dirname, "../browser/static/index.html"));
    });
    app.use(Express.static(Path.join(__dirname, '../browser/static')));
    ok(app);
  });
}


module.exports = set;
