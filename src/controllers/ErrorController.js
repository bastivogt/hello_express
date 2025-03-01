const BaseController = require("../../sevo/controllers/BaseController");

class HttpErrorController extends BaseController {
    _404(req, res, next) {
        res.render("error/404", {
            title: "Error 404 - Page not found",
        });
    }

    underConstruction(req, res, next) {
        res.render("error/under_construction", {
            title: "Under contruction!"
        });
    }
}

module.exports = HttpErrorController.getInstance();
