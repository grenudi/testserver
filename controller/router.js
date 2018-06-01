const Path = require("path");

const set = function(app){
  return new Promise(ok,notok){
    app.get("/",(req,res)=>{
      res.send(Path.join(__dirname, "../browser/static/index.html"));
    });
    app.use(Express.static(Path.join(__dirname, '../browser/static')));
  }
}

module.exports = set;
