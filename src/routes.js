const express = require("express");
const controller = require("./controllers/_controller");

const router = express.Router();

//Rutas de la api

//RUTAS PARA ASTEROIDES
router
  .route("/nea")
  //ruta de registro de NEA mediante POST.
  .post(controller.asteroidController.registerNEA)
  //ruta para listar los NEA de nuestra base de datos mediante GET.
  .get(controller.asteroidController.listNEA);

router
  .route("/nea/:id")
  //ruta para el borrado de un NEA en concreto a partir de su id.
  .delete(controller.asteroidController.deleteNEA)
  //ruta para actualizar la info de un NEA en funcion de su id.
  .put(controller.asteroidController.updateNEA);

//RUTAS PARA USUARIOS:

//ruta para el registro de un usuario nuevo
router.route("/user/register").post(controller.userController.registerUser);
//ruta para el login de un usuario registrado que nos dara un token de acceso.
router.route("/user/login").post(controller.userController.loginUser);
//ruta para borrar un usuario en funcion de su id.
router
  .route("/user/:id")
  //ruta para el borrado de un usuario en concreto a partir de su id.
  .delete(controller.userController.deleteUser)
  //ruta para actualizar la info de un usuario en funcion de su id.
  .put(controller.userController.updateUser);
//ruta para obtener todos los usuarios registrados en nuestra API
router.route("/users/list").get(controller.userController.listUsers);

module.exports = router;
