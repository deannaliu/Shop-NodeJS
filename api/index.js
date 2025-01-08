const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/products");
dotenv.config()

// uses the port defined in the .env file
const PORT = process.env.PORT;

// connect to mongodb
const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE_URL).then(() => console.log("Database Connected")).then((err) => {
    err;
});

// api product test route
app.get("/api/products", (req, res) => {
    res.json(products);
});

// api one product test route
app.get("/api/products/:id", (req, res) => {
    // check to match the id in the route to the id of the product in the products list
    const product = products.find((product) => product.id == req.params.id)
    res.json(product);
});

app.listen(PORT, function(err){
    if (err) 
        console.log("Error in server setup")
    console.log("Server listening on Port", PORT)
})