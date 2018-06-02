const local = {
  port: 8080
};
const heroku = {
  port: process.env.PORT
};

module.exports = heroku;
