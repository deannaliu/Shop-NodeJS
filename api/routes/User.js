const express = require("express");
const userRoute = express.Router();
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

userRoute.post('/login', asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        // findOne is mongodb function
        const user = await User.findOne({ email });

        // verify login information
        if (user && (await user.matchPassword(password))) {
            // if the user exists, return this set of data
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: null,
                createdAt: user.createdAt
            })
        } else {
            res.status(401);
            throw new Error("Invalid Email or Password");
        }
    }
))

// register new user route
userRoute.post("/", asyncHandler(
    async (req, res) => {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(400);
            throw new Error("User already exists");
        } else {
            const user = await User.create({
                name, email, password
            })

            if (user) {
                res.status(201).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    createdAt: user.createdAt
                });
            } else {
                res.status(400)
                throw new Error("Invalid user data")
            }
        }
    }
))

module.exports = userRoute;