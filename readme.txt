----------------------------------------------------------------------------------------------------------------
*AUTOR:
*German Palero
*03-04-2021
*Hackathon NUWE: Hack that startUp

-----------------------------------------------------------------------------------------------------------------

//EJECUCION

Para iniciar la API puedes ejecutarla con los siguientes comandos:
   -npm run start: Para ejecutar la API en modo produccion.
   -npm run dev: Para ejecutarla en modo development (Carga nodemon y dotenv para la lectura del puerto en el .env)

------------------------------------------------------------------------------------------------------------------

Contenido de la API:

//CONTROLLERS

En esta carpeta encontramos tres archivos:

#_controller.js--> Es simplemente un archivo para organizar y centralizar los controladores de la API (Utilidad organizativa)

#asteroidController.js-->Se encarga de todas las funciones relacionadas con los NEA (Listar, Registrar uno nuevo...)

#userController.js-->Se encarga de todas las funciones relaciones con la gestion de usuarios (Login y registro)

//ROUTES 

LA API CONSTA DE LAS SIGUIENTES RUTAS:

1.- "/nea" ===> Donde mediante el metodo: 

#POST podremos crear un NUEVO NEA y registrar sus parametros
#GET podremos recuperar los datos de todos los NEA de nuestra base de datos en mongo atlas.

2.- "/user/register" ===> Donde mediante el metodo:

#POST podremos registrar un NUEVO usuario con nombre y contrasena (LA CUAL ESTARA CIFRADA CON bcrypt)

3.- "/user/login" ===> Donde mediante el metodo:

#POST podemos hacer "login" y recibir los datos del usuario para autorizar al mismo usuario en caso de estar en
nuestra base de datos a acceder a nuestro listado de asteroides.


//LOADERS
Esta carpeta consta de tres archivos en los que:
#_loader.js-->A modo organizativo recoge el loader de mongoose(Encargado de la conexion con mongo) y de express(configuracion de la app)
para simplemente tener que cargar un archivo en app.js y que el codigo sea mas LEGIBLE y ORDENADO.

#expressLoader-->Carga middlewares en la app de express.

#mongooseLoader-->Carga y connecta con la base de datos de MONGO ATLAS.

//MODELS

#Modelos de usuario y asteroides.

//ARCHIVOS PRINCIPALES DENTRO DE SRC

#app.js-->Archivo principal desde donde se lanzara toda la API, contiene el menor codigo posible para que quede mas ordenado y limpio.

#config.js-->Configuraciones de entorno de la API que hacen referencia a (PUERTO, URI y TOKEN SECRET para la autenticacion con JWT)

#routes.js-->Rutas de nuestra API.




#.env que no se incluira en el repositorio en el que constan el puerto de ejecucion, la uri de conexion con MongoAtlas y el token secret.

