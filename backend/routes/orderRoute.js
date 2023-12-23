const express = require("express");
const { isAuthenticatedUser, authorizedRoles } = require("../middlewares/auth");
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require("../controllers/orderController");
const Router=express.Router();

Router.route("/order/new").post(isAuthenticatedUser, newOrder);

Router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

Router.route("/orders/me").get(isAuthenticatedUser, myOrders);

Router.route("/admin/orders").get(isAuthenticatedUser, authorizedRoles("admin"), getAllOrders);

Router.route("/admin/order/:id").put(isAuthenticatedUser, authorizedRoles("admin"), updateOrder).delete(isAuthenticatedUser, authorizedRoles("admin"), deleteOrder)

module.exports = Router;