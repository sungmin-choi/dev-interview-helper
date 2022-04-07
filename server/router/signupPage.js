const express = require("express");
const router = express.Router();
const controller = require("../controller/signup");

router.post("/emailCheck", controller.emailCheck);
router.post("/signup", controller.signup);

module.exports = router;
