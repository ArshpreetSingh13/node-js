const { Schema } = require("mongoose")
const mongoose=require("mongoose")

const SchoolSchema=mongoose.Schema({
    autoId:{type:Number,default:''},
    name:{type:String,default:''},
    course: { type: mongoose.Schema.Types.ObjectId, ref:'Course'},
    age:{type:String,default:''},
    dob:{type:Date,default:''},
    registerDate:{type:Date,default:''},
    fatherName:{type:String,default:''},
    motherName:{type:String,default:''},
    
    userId: { type: mongoose.Schema.Types.ObjectId, ref:"users"},
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default: Date.now()},
})

module.exports = mongoose.model("Student", SchoolSchema)