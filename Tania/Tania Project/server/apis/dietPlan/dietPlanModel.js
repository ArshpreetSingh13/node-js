const mongoose = require("mongoose");

const dietPlanSchema = new mongoose.Schema({
    trainerId: { type: mongoose.Schema.Types.ObjectId, ref: "Trainer" },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    week: { type: String, default: "" },
    day1: { type: String, default: "" },
    day2: { type: String, default: "" },
    day3: { type: String, default: "" },
    day4: { type: String, default: "" },
    day5: { type: String, default: "" },
    day6: { type: String, default: "" },
    day7: { type: String, default: "" },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("DietPlan", dietPlanSchema);
