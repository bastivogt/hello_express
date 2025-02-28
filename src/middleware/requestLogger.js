function requestLogger(req, res, next) {
    console.log("[requestLogger]", "path: ", req.path);
    next();
}

module.exports = requestLogger;

// module.exports.requestLogger = (req, res, next) => {
//     console.log(req.path);
//     next();
// };
