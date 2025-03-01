function requestLogger(req, res, next) {
    console.log("[requestLogger]", "path: ", req.path);
    next();
}

module.exports = requestLogger;
