const express = require("express");

const HomeRouter = require("./src/routes/HomeRouter");
const PeopleRouter = require("./src/routes/PeopleRouter")
const requestLogger = require("./src/middleware/requestLogger");

const app = express();
const port = 8042;
const host = "http://localhost"


// middleware
app.use(express.static("./src/public"));
// custom middleware
app.use(requestLogger);


// Routes
app.use(HomeRouter);
app.use(PeopleRouter);


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

app.listen(port, () => {
    console.log(`App listen at: ${host}:${port}`);
});

// const person = require("./sevo/Person");

// const p1 = new person.Person("Sebastian", "Vogt", "27.02.1981");
// console.log(p1.greeting());
