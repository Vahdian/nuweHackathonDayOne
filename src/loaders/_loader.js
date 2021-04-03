const expressLoader = require("./expressLoader");
const mongooseLoader = require("./mongooseLoader");

async function loader(app) {
  await mongooseLoader();
  console.info("Mongoose Ready!");
  expressLoader(app);
  console.info("Express is Ready!");
}

module.exports = loader;
