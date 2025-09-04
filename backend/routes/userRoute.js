// const express = require("express");
// const route=express.Router();
// const UserController = require("../controllers/userController");
// // route.post("/registration",  UserController.userRegistration);
// // route.post("/login",  UserController.userLogin);
// // route.post("/userauth",  UserController.userAuth);


// module.exports =route;






const express = require("express");
const route=express.Router();
const UserController = require("../controllers/userController");

route.post("/usersave",  UserController.userSave);
route.get("/display",  UserController.userDisplay);

module.exports =route;
