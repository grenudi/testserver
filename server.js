const Express = require("express");
const app = Express();
const {join} = require("path");

app.get("/",(req,res)=>{
  res.sendFile(join(__dirname,"./test.html"));
});
app.get("/someshit/yetanothershit",(req,res)=>{
  res.sendFile(join(__dirname,"./test.html"));
});
app.get("/static/jquery",(req,res)=>{
  res.sendFile(join(__dirname,"./jquery-3.3.1.min.js"));
})
app.use(Express.static('./public'));

app.listen(8081,()=>console.log("server is upsidedown"));
