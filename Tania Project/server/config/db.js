const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/tania").then(()=>{
    console.log("Database Connected successfully");
    
}).catch((err)=>{
    console.log("Database error");
    
})