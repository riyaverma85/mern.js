
const express = require("express");
const route=express.Router();
const autherController = require("../controllers/autherController");

route.post("/authersave",  autherController.addAuther);
 route.get("/autherdisplay",  UserController.autherDisplay);

module.exports =route;