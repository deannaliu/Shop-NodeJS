const express = require("express");
const orderRoute = express.Router();
const asyncHandler = require("express-async-handler");
const protect = require("../middleware/Auth");
const Order = require("../models/Order");

orderRoute.post("/", protect, asyncHandler(
    async(req, res) => {
        const {orderItems, shippingAddress, paymentMethod, shippingPrice, taxInfo, totalPrice, price} = req.body;
        if (orderItems && orderItems.length === 0) {
            res.status(400);
            throw new Error ("no items in order")
        } else {
            const order = new Order({
                orderItems, shippingAddress, paymentMethod, shippingPrice, taxInfo, totalPrice, price, user: req.user._id
            });
            const createdOrder = await order.save()
            res.status(201).json(createdOrder)
        }
    }
))

module.exports = orderRoute;