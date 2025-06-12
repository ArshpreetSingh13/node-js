const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
    name: {type:String,default:"No name"},
    email: { type: String, default: "" },
    address: {type:String,default:""},
    experience: {type:String,default:""},
    profile: {type:String,default:""},
    contact: { type: Number, default: "" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Trainer", trainerSchema);
