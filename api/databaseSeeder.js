const router = require("express").Router();
const User = require('./models/User');
const users = require('./data/Users');
const Product = require("./models/Product");
const products = require("./data/products");
const asyncHandler = require("express-async-handler");

// using async handler to handle the errors if let's say data is missing a property
router.post("/users", asyncHandler(
    async(req, res) => {
        await User.deleteMany({});
        const UserSeeder = await User.insertMany(users)
        res.send(UserSeeder)
    }
));

router.post("/products", asyncHandler(
    async(req, res) => {
        await Product.deleteMany({});
        const ProductSeeder = await Product.insertMany(products)
        res.send(ProductSeeder)
    }
));

module.exports = router;