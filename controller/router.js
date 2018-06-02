const Path = require("path");
const Express = require("express");

const chrome = function(app){
  return new Promise((ok,notok)=>{
    app.get("/",(req,res)=>{
      res.sendFile(Path.join(__dirname, "../browser/static/extension/index.html"));
    });
    app.use(Express.static(Path.join(__dirname, '../browser/static/extension')));
    ok(app);
  });
};

const lohbox = function(app){
  return new Promise((ok, notok)=>{
    app.get("/",(req,res)=>{
      res.sendFile(Path.join(__dirname, "../browser/static/lohbox/index.html"));
    })
  });
}


module.exports = {
  lohbox,
  chrome
};
