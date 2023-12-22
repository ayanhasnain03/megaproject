const express = require("express");
const { registerUser ,loginUser, logoutUser} = require("../controllers/userController");
const Router = express.Router();

Router.route("/register").post(registerUser);
Router.route("/login").post(loginUser);
Router.route("/logout").post(logoutUser);

module.exports = Router;