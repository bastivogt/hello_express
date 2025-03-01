const RoutesManager = require("../../sevo/routes/RoutesManager");
const Route = require("../../sevo/routes/Route");

const HomeController = require("../controller/HomeController");
const PeopleController = require("../controller/PeopleController");


const routesManager = RoutesManager.getRoutesManager();


// HomeController
routesManager.addRoute(new Route(Route.GET, "/", HomeController.index, "home:index"));
routesManager.addRoute(new Route(Route.GET, "/hello", HomeController.hello, "home:hello"));
routesManager.addRoute(new Route(Route.GET, "/greeting/:name", HomeController.greeting, "home:greeting"));

// PeopleController
routesManager.addRoute(new Route(Route.GET, "/people", PeopleController.index, "people:index"));
routesManager.addRoute(new Route(Route.GET, "/person/:id", PeopleController.detail, "person:detail"));
routesManager.addRoute(new Route(Route.GET, "/person/create", PeopleController.create, "person:create"));
routesManager.addRoute(new Route(Route.POST, "/person/create", PeopleController.create, "person:create:post"));



routesManager.createRouter();
module.exports = routesManager;