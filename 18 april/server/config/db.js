const mongoose = require("mongoose");




mongoose.connect("mongodb://127.0.0.1:27017/node_first").then(()=>{
    console.log("connection successfully");
    
}).catch((err)=>{
    console.log("connection unsuccessfully",err);

})