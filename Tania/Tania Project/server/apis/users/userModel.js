const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    email: { type: String, unique: true },
    password: { type: String, default: "" },
    userType: { type: String, default: "" }, // 1- admin 2-trainer 3-customer
    status: { type: Boolean, default:true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
