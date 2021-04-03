const express = require("express");
const controller = require("./controllers/_controller");

const router = express.Router();

//Rutas de la api

/* router.route("/user").post(controller.userController); */
router
  .route("/nea")
  .post(controller.asteroidController.registerNEA)
  .get(controller.asteroidController.listNEA);

router.route("/user/register").post(controller.userController.registerUser);

router.route("/user/login").post(controller.userController.loginUser);

module.exports = router;
