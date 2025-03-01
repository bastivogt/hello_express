const express = require("express");
const bodyParser = require("body-parser");


const routesManager = require("./src/routes/routesManager");
const RouteHelper = require("./src/helper/RouteHelper");
const requestLogger = require("./src/middleware/requestLogger");

const app = express();
const port = 8042;
const host = "http://localhost"


// middleware
app.use(express.static("./src/public"));
app.use(bodyParser.urlencoded({extended: true}));
// custom middleware
app.use(requestLogger);

console.log(routesManager.getRoutePath("person:detail", {id:5}));

// Routes
app.use(routesManager.getRouter());


// 404
app.use((req, res) => {
    res.status(404).render("error/404", {
        title: "404 Page not found",
    });
});



// template engine
// npm i ejs
//app.set("view engine", "ejs");
// npm i pug
app.set("view engine", "pug");
// default is "./views"
app.set("views", "./src/views");

// locals
app.locals.url = RouteHelper.url
//app.locals.url = (name, param = null) => routesManager.getRoutePattern(name, param);

app.listen(port, () => {
    console.log(`App listen at: ${host}:${port}`);
});

// const person = require("./sevo/Person");

// const p1 = new person.Person("Sebastian", "Vogt", "27.02.1981");
// console.log(p1.greeting());
