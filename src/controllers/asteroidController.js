const NEA = require("../models/NEA");

async function test(req, res, next) {
  res.send("Esto es un test de asteroides");
  next();
}

async function registerNEA(req, res) {
  try {
    const newNEA = new NEA();
    newNEA.full_name = req.body.full_name;
    newNEA.a = req.body.a;
    newNEA.e = req.body.e;
    newNEA.i = req.body.i;
    newNEA.om = req.body.om;
    newNEA.w = req.body.w;
    newNEA.ma = req.body.ma;
    const savedNEA = await newNEA.save();
    res.send({ NEA: savedNEA._id });
    console.log("New asteroid saved correctly");
  } catch (err) {
    console.error(err);
    res.send("Error saving your asteroid in the database");
  }
}

async function listNEA(req, res, next) {
  const asteroid = await NEA.find();
  res.send(asteroid);
  next();
}

async function deleteNEA(req, res, next) {}

module.exports = { test, registerNEA, listNEA };
