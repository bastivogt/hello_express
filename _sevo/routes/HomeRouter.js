const express = require("express");
const HomeController = require("../controller/HomeController")


router = express.Router();

router.get("/", HomeController.index);
router.get("/hello", HomeController.hello);
router.get("/greeting/:name", HomeController.greeting);

module.exports = router;