const Express = require("express");
const app = Express();

const router = require("./router.js");
const config = require("./config.js");

router(app).then(()=>{app.listen(config.port)});
