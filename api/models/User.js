const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false }
    }, { timestamps: true }
)

// validate password using a method
// if we use async, use await
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// register password hash and store
// pre-save middleware hook for mongodb
// middleware refers to the piece of code sitting in between an incoming req and final response
// .pre() defines a method that defines a middleware that runs BEFORE saving into db
// .isModified() checks if the field was modified, if it wasn't it skips the hashing process and goes next
userSchema.pre("save", async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

module.exports = mongoose.model("User", userSchema)