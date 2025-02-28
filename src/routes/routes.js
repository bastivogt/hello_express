const RoutesManager = require("./../../sevo/routes/RoutesManager");
const Route = require("./../../sevo/routes/Route");

const HomeController = require("./../controller/HomeController");
const PeopleController = require("./../controller/PeopleController");


const routesManager = RoutesManager.getRoutesManager();


// HomeController
routesManager.addRoute(new Route("get", "/", HomeController.index, "home:index"));
routesManager.addRoute(new Route("get", "/hello", HomeController.hello, "home:hello"));
routesManager.addRoute(new Route("get", "/greeting/:name", HomeController.greeting, "home:greeting"));

// PeopleController
routesManager.addRoute(new Route("get", "/people", PeopleController.index, "people:index"));
routesManager.addRoute(new Route("get", "/person/:id", PeopleController.detail, "person:detail"));



routesManager.createRouter();
module.exports = routesManager;