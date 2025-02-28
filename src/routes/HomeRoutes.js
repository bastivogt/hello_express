const express = require("express");
const HomeController = require("../controller/HomeController");

const Route = require("../../sevo/routes/Route");
const RoutesManager = require("../../sevo/routes/RoutesManager");


// router = express.Router();

// router.get("/", HomeController.index);
// router.get("/hello", HomeController.hello);
// router.get("/greeting/:name", HomeController.greeting);

const routesManager = RoutesManager.initialize();

routesManager.addRoute(new Route("get", "/", HomeController.index, "home:index"));
routesManager.addRoute(new Route("get", "/hello", HomeController.hello, "home:hello"));
routesManager.addRoute(new Route("get", "/greeting/:name", HomeController.greeting, "home:greeting"));


routesManager.createRouter();

module.exports = routesManager;