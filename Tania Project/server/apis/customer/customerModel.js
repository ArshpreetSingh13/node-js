const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    email: { type: String, unique: true },
    address: { type: String, default: "" },
    gender: { type: String, default: "" },
    profile: { type: String, default: "" },
    contact: { type: Number, default: "" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Customer", customerSchema);
