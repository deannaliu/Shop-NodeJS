const mongoose = require("mongoose");

const orderItemsSchema = mongoose.Schema( {
    name: { type: String, required: true },
    quantity: {type: Number, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }
})

const orderSchema = mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
        orderItems: [orderItemsSchema],
        shippingAddress: { 
            address: { type: String, required: true },
            city: { type: String, required: true },
            zipCode: { type: String, required: true },
            country: { type: String, required: true }
        },
        paymentMethod: { type: String, required: true, default: "Paypal" },
        paymentResult: {
            id: { type: String },
            status: { type: String },
            updated_time: { type: String },
            email_address: { type: String },
        },
        taxInfo: { type: Number, required: true, default: 0.0 },
        shippingPrice: { type: Number, required: true, default: 0.0 },
        totalPrice: { type: Number, required: true, default: 0.0 },
        paymentStatus: { type: Boolean, required: true, default: false},
        orderDate: { type: Date }, 
        shippingStatus: {type: Boolean, required: true, default: false},
        deliveryDate: { type: Date }
    }, { timestamps: true }
)

module.exports = mongoose.model("Order", orderSchema);