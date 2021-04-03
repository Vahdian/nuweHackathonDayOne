const mongoose = require("mongoose");

const config = require("../config");

async function mongooseLoader() {
  try {
    await mongoose.connect(config.db.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = mongooseLoader;
