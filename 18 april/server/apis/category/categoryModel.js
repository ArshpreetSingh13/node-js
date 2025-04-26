let mongoose=require("mongoose");

let categorySchema=new mongoose.Schema({
    autoId:{type:Number,default:0},
    name:{type:String,default:''},
    description:{type:String,default:'no discription'},
    status:{type:Boolean, default: true },
    
    createdAt:{type:Date,default:Date.now()}
})


module.exports = mongoose.model("category", categorySchema);