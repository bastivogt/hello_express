const express = require("express");

const HomeRoutes = require("./src/routes/HomeRoutes");
const PeopleRoutes = require("./src/routes/PeopleRoutes");
const RouteHelper = require("./src/helper/RouteHelper");
const requestLogger = require("./src/middleware/requestLogger");

const app = express();
const port = 8042;
const host = "http://localhost"


// middleware
app.use(express.static("./src/public"));
// custom middleware
app.use(requestLogger);


// Routes
app.use(HomeRoutes.getRouter());
app.use(PeopleRoutes.getRouter());


// 404
app.use((req, res) => {
    res.status(404).render("error/404", {
        title: "404 Page not found",
    });
});



// template engine
// npm i ejs
app.set("view engine", "ejs");
// default is "./views"
app.set("views", "./src/views");

// locals
app.locals.url = RouteHelper.url

app.listen(port, () => {
    console.log(`App listen at: ${host}:${port}`);
});

// const person = require("./sevo/Person");

// const p1 = new person.Person("Sebastian", "Vogt", "27.02.1981");
// console.log(p1.greeting());
