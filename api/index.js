const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()

// uses the port defined in the .env file
const PORT = process.env.PORT;

// test route
app.get("/", (req, res) => {
    res.send("app is running")
});

app.listen(PORT, function(err){
    if (err) 
        console.log("Error in server setup")
    console.log("Server listening on Port", PORT)
})