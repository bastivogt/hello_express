const Route = require("./Route");
const RoutesManager = require("./RoutesManager");

const HomeController = require("../../src/controllers/HomeController");

rm = new RoutesManager();
rm.addRoute(new Route("get", "/", HomeController.index, "home:index"));
rm.addRoute(new Route("get", "/hello", HomeController.hello, "home:hello"));
rm.addRoute(
    new Route(
        "get",
        "/greeting/:name",
        HomeController.greeting,
        "home:greeting"
    )
);

console.log(rm._routes);

console.log(rm.getRoute("home:index"));
