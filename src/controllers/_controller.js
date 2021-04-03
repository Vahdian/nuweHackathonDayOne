const userController = require("./userController");
const asteroidController = require("./asteroidController");

async function test(req, res, next) {
  console.log("This is a test!");
  res.send({ response: "This is a test response" });
  next();
}

module.exports = { test, asteroidController, userController };
