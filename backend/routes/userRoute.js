const express = require("express");
const { registerUser ,loginUser, logoutUser, forgotPassword, resetPassword} = require("../controllers/userController");
const Router = express.Router();

Router.route("/register").post(registerUser);
Router.route("/login").post(loginUser);
Router.route("/logout").post(logoutUser);
Router.route("/password/forgot").post(forgotPassword);
Router.route("/password/reset/:token").put(resetPassword);
module.exports = Router;