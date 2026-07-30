const express = require("express");
const router = express.Router();
// importing the function that knows how to register user
const { registerUser } = require("../controllers/authController");



router.post("/register", registerUser);
// means if someone sends /register call regiterUser

module.exports = router;