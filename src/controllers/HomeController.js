const BaseController = require("../../sevo/controllers/BaseController");

class HomeController extends BaseController {
    index(req, res) {
        return res.render("home/index", {
            title: "Home Index",
        });
    }

    hello(req, res) {
        const greeting = "Hello, world!";
        //console.log("referrer", req.get("referrer"));
        return res.render("home/hello", {
            greeting: greeting,
            title: "Hello!",
        });
    }

    greeting(req, res, next) {
        const name = req.params.name;
        return res.render("home/greeting", {
            title: "Greeting",
            name: name,
        });
    }
}

module.exports = HomeController.getInstance();

/* const HomeController = {
    index(req, res) {
        return res.render("home/index", {
            title: "Home Index",
        });
    },

    hello(req, res) {
        const greeting = "Hello, world!";
        return res.render("home/hello", {
            greeting: greeting, 
            title: "Hello!"
        });
    }
}

module.exports = HomeController; */
