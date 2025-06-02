const express=require("express")
const app=express()
const PORT=5000

app.use(express.urlencoded())
app.use(express.json())

const db = require('./server/config/db')


const apis=require("./server/routes/apiRoutes")
app.use("/api",apis)



app.listen(PORT,err=>{
    if(err){
        console.log("There is an error",err)
    }
    else{
        console.log("System is running in",PORT)

    }
})