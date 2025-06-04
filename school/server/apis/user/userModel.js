const monsooge=require("mongoose")

let userSchema = monsooge.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    password:{type:String,default:""},
    userId:{type:Number,default:""},  //1=admin  2=teacher   3=student
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = monsooge.model("users", userSchema)