const express=require("express")
const app=express()

const db=require("./server/config/db")

const seeder=require("./server/config/seeder")  
seeder.adminAdd()
const PORT=5001

var cors = require('cors')

app.use(cors())


const apis=require("./server/routes/apiRouter")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",apis)






app.listen(PORT,(err)=>{

    if(err){
        console.log("There is an error in server");
        
    }
    else{
        console.log("Server is connected");
        
    }
})