const mongoose=require("mongoose")

const SchoolSchema=mongoose.Schema({
    autoId:{type:Number,default:''},
    name:{type:String,default:''},
    course:{type:String,default:''},
    age:{type:String,default:''},
    dob:{type:Date,default:''},
    registerDate:{type:Date,default:''},
    fatherName:{type:String,default:''},
    motherName:{type:String,default:''},
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default: Date.now()},
})

module.exports = mongoose.model("Student", SchoolSchema)