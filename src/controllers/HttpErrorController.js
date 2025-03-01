const BaseController = require("./../../sevo/controllers/BaseController");

class HttpErrorController extends BaseController {
    _404(req, res, next) {
        res.render("http_error/404", {
            title: "Error 404 - Page not found",
        });
    }
}

module.exports = HttpErrorController.getInstance();
