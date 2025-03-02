const RoutesManager = require("../../sevo/routes/RoutesManager");
const Route = require("../../sevo/routes/Route");

const HomeController = require("../controllers/HomeController");
const PeopleController = require("../controllers/PeopleController");
const ErrorController = require("../controllers/ErrorController");

const routesManager = RoutesManager.getInstance();

// under construction
//routesManager.addRoute(new Route(Route.USE, "", ErrorController.underConstruction, "error:under_construction"));

// HomeController
routesManager.addRoute(new Route(Route.GET, "/", HomeController.index, "home:index"));
routesManager.addRoute(new Route(Route.GET, "/hello", HomeController.hello, "home:hello"));
routesManager.addRoute(new Route(Route.GET, "/greeting/:name", HomeController.greeting, "home:greeting"));

// PeopleController
routesManager.addRoute(new Route(Route.GET, "/people", PeopleController.index, "people:index"));
routesManager.addRoute(new Route(Route.GET, "/person/:id", PeopleController.detail, "person:detail"));
routesManager.addRoute(new Route(Route.GET,"/person/create", PeopleController.create, "person:create"));
routesManager.addRoute(new Route(Route.POST, "/person/create", PeopleController.create, "person:create:post"));
routesManager.addRoute(new Route(Route.GET,"/person/update/:id", PeopleController.update, "person:update"));
routesManager.addRoute(new Route(Route.POST, "/person/update/:id", PeopleController.update, "person:update:post"));
routesManager.addRoute(new Route(Route.GET,"/person/delete/:id", PeopleController.delete, "person:delete"));
routesManager.addRoute(new Route(Route.POST,"/person/delete/:id", PeopleController.delete, "person:delete:post"));

// Errors
routesManager.addRoute(new Route(Route.USE, "", ErrorController._404, "error:404"));

routesManager.createRouter();
module.exports = routesManager;
