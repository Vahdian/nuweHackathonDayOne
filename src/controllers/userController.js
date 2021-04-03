const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config");

async function registerUser(req, res, next) {
  //Primero configuro el nivel de encriptacion de la password con "SaltRounds"
  const salt = await bcrypt.genSaltSync(10);
  //Hasheo la password y la guardo en una constante:
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const newUser = new User();
    newUser.name = req.body.name;
    newUser.password = hashedPassword;
    const savedUser = await newUser.save();
    res.send({ user: savedUser._id });
    console.log("User registered correctly!");
  } catch (err) {
    res.status(400).send(err);
    console.log("Failed user register");
  }
}

async function loginUser(req, res, next) {
  //comprueba que el usuario este registrado primero:
  const user = await User.findOne({ name: req.body.name });
  if (!user) return res.status(400).send("Your username or password is wrong");
  //comprobacion de password:
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass)
    return res
      .status(400)
      .send("Wrong password. Access to asteroid database Denied");
  //Creacion y asignacion de token:
  const token = jwt.sign({ _id: user._id }, config.token.secret);
  res.header("AuthToken", token).send(token);
  res.send("Logged in!");

  next();
}

async function listUsers(req, res, next) {
  const users = await User.find();
  res.send(users);
  next();
}

module.exports = { registerUser, loginUser, listUsers };
