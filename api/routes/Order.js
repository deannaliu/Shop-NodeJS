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

orderRoute.put("/:id/payment", protect, asyncHandler(
    async(req, res) => {
        const order = await Order.findById(req.params.id)
        if (order) {
            order.isPaid = true;
            order.paidAt = Date.now();
            order.paymentResult = {
                id: req.body.id,
                status: req.body.status,
                updated_time: req.body.updated_time,
                email_address: req.body.email_address
            }
            const updatedOrder = await order.save();
            res.status(200).json(updatedOrder);
        } else {
            res.status(404)
            throw new Error ("order does not exist")
        }
    }
)) 

orderRoute.get("/", protect, asyncHandler(
    async(req, res) => {
        const orders = await Order.find({user: req.user._id}).sort({_id:-1})
        if (orders) {
            res.status(200).json(orders);
        } else {
            res.status(404);
            throw new Error("order does not exist")
        }
    }
))

orderRoute.get("/:id", protect, asyncHandler(
    async(req, res) => {
        // populate data with matchin user + email
        const orders = await Order.findById(req.params.id).populate("user", "email")
        if (orders) {
            res.status(200).json(orders);
        } else {
            res.status(404);
            throw new Error("order does not exist")
        }
    }
))

module.exports = orderRoute;