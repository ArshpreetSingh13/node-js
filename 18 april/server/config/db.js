const mongoose = require("mongoose");




mongoose.connect("mongodb+srv://arshpreetsingh1327:dhillons@cluster0.ce85icl.mongodb.net/first").then(()=>{
    console.log("connection successfully");
    
}).catch((err)=>{
    console.log("connection unsuccessfully",err);

})