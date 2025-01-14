const express = require("express");
const userRoute = express.Router();
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const generateToken = require("../generateToken")
const protect = require("../middleware/Auth")

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
                token: generateToken(user._id),
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

// user profile
userRoute.get("/profile", protect, asyncHandler (
    async (req, res) => {
        const user = await User.findById( req.user._id );
        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt
            });
        } else {
            res.Error(404)
            throw new Error("User not found")
        }
    }
))

// profile update
userRoute.put("/profile", protect, asyncHandler(
    async(req, res) => {
        const user = await User.findById(req.user._id);
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = req.body.password
            }
            const updatedUser = await user.save();
            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin,
                createdAt: updatedUser.createdAt,
                token: generateToken(updatedUser._id)
            });

        } else {
            res.Error(404)
            throw new Error("User not found")
        }
    }
))

module.exports = userRoute;