const express = require("express");
const router = express.Router();
const { getProfileData } = require("../controlers/profileController");

router.get("/", getProfileData);
module.exports = router;
