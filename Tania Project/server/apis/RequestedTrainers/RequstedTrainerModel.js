const mongoose = require("mongoose");

const requestTrainerSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    trainerId: { type: mongoose.Schema.Types.ObjectId, ref: "Trainer" },
    status: { type: Boolean, default:true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("RequestTrainer", requestTrainerSchema);
