const { NativeError } = require("mongoose");
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

async function deleteNEA(req, res, next) {
  const id = req.params.id;
  await NEA.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete NEA with id=${id}.`,
        });
      } else {
        res.send({
          message: "NEA was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete NEA with id=" + id,
      });
    });
}

async function updateNEA(req, res, next) {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update NEA with id=${id}.`,
        });
      } else res.send({ message: "NEA was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating NEA with id=" + id,
      });
    });
}

module.exports = { test, registerNEA, listNEA, deleteNEA, updateNEA };
