const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/tania").then(()=>{
    // mongoose.connect("mongodb+srv://pault3873:0Hfjt@cluster0.92wwo7q.mongodb.net/tania").then(()=>{
    console.log("Database Connected successfully");
    
}).catch((err)=>{
    console.log("Database error");
    
})