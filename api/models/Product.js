const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        // objectId is automatically created
        user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }
    }
)

const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        rating: { type: Number, required: true, default: 0 },
        numReview: { type: Number, required: true, default: 0 },
        price: { type: Number, required: true, default: 0 },
        countInStock: { type: Number, required: true, default: 0 },
    }
);

module.exports = mongoose.model("Product", productSchema)