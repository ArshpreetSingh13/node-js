const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://arshpreetsingh1327:dhillons@cluster0.ce85icl.mongodb.net/school").then(()=>{
    console.log("SuccessFully Connect");
    
}).catch((err)=>{
    console.log("Error while Connect",err);
    
})