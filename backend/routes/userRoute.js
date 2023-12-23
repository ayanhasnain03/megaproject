const express = require("express");
const { isAuthenticatedUser, authorizedRoles } = require("../middlewares/auth");
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUsers, getSingleUser, updateUserRole, deleteUser } = require("../controllers/userController");
const Router = express.Router();
//register
Router.route("/register").post(registerUser);
//login
Router.route("/login").post(loginUser);
//logout
Router.route("/logout").post(logoutUser);
// send token on email
Router.route("/password/forgot").post(forgotPassword);
// password reset via email roken
Router.route("/password/reset/:token").put(resetPassword);
// get user own details
Router.route("/me").get(isAuthenticatedUser, getUserDetails);
// updater user password
Router.route("/password/update").put(isAuthenticatedUser, updatePassword);
// update user forfile
Router.route("/me/update").put(isAuthenticatedUser, updateProfile);

Router.route("/admin/users").get(isAuthenticatedUser, authorizedRoles("admin"), getAllUsers);
Router.route("/admin/user/:id")
    .get(isAuthenticatedUser, authorizedRoles("admin"), getSingleUser)
    .put(isAuthenticatedUser, authorizedRoles("admin"), updateUserRole)
    .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteUser);

module.exports = Router;