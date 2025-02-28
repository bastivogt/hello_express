const express = require("express");
const PeopleController = require("../controller/PeopleController");
const Route = require("./../../sevo/routes/Route");
const RoutesManager = require("./../../sevo/routes/RoutesManager");




// router = express.Router();

// router.get("/people/", PeopleController.index);
// router.get("/person/:id", PeopleController.detail);

const routesManager = RoutesManager.initialize();

routesManager.addRoute(new Route("get", "/people", PeopleController.index, "people:index"));
routesManager.addRoute(new Route("get", "/person/:id", PeopleController.detail, "person:detail"));


routesManager.createRouter();

module.exports = routesManager;