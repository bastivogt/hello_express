const express = require("express");
const bodyParser = require("body-parser");

const routesManager = require("./src/routes/routesManager");
const RouteHelper = require("./src/helpers/RouteHelper");
const requestLogger = require("./src/middlewares/requestLogger");
const HttpErrorController = require("./src/controllers/ErrorController");

const app = express();
const port = 8042;
const host = "http://localhost";

// middlewares
app.use(express.static("./src/public"));
app.use(bodyParser.urlencoded({ extended: true }));
// custom middlewares
app.use(requestLogger);

console.log(routesManager.getRoutePath("person:detail", { id: 5 }));

// Routes
app.use(routesManager.getRouter());

// 404
// app.use((req, res) => {
//     res.status(404).render("http_error/404", {
//         title: "404 Page not found",
//     });
// });
//app.use(HttpErrorController._404);
// now in rotes/routeManager

// template engine
// npm i ejs
//app.set("view engine", "ejs");
// npm i pug
app.set("view engine", "pug");
// default is "./views"
app.set("views", "./src/views");



// locals
app.locals.path = RouteHelper.path;
app.locals.siteTitle = "Hello Express";
//app.locals.url = (name, param = null) => routesManager.getRoutePattern(name, param);

app.listen(port, () => {
    console.log(`App listen at: ${host}:${port}`);
});

// const person = require("./sevo/Person");

// const p1 = new person.Person("Sebastian", "Vogt", "27.02.1981");
// console.log(p1.greeting());
