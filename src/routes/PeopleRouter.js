const express = require("express");
const PeopleController = require("../controller/PeopleController")


router = express.Router();

router.get("/people/", PeopleController.index);
router.get("/person/:id", PeopleController.detail);

module.exports = router;