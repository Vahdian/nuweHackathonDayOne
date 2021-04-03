const routes = require("../routes");
const express = require("express");

function expressLoader(app) {
  app.use(express.json());
  app.use(routes);
}

module.exports = expressLoader;
