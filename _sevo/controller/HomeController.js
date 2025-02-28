class HomeController {
    index(req, res) {
        return res.render("home/index", {
            title: "Home Index",
        });
    }

    hello(req, res) {
        const greeting = "Hello, world!";
        return res.render("home/hello", {
            greeting: greeting, 
            title: "Hello!"
        });
    }

    greeting(req, res, next) {
        const name = req.params.name;
        return res.render("home/greeting", {
            title: "Greeting",
            name: name
        })
    }
}

module.exports = new HomeController();
















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

