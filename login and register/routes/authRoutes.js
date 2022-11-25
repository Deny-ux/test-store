const { login, register } = require("../controlers/authController");

const express = require("express");
const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);

module.exports = router;
