let express=require("express")

let app=express()

let PORT=5000

app.use(express.urlencoded())
app.use(express.json())


const db=require("./server/config/db")


app.get("/", (req, res) => {
    res.send("Welcome to server")
})
  
let apis=require("./server/routes/apis.js")
app.use("/api",apis)




app.listen(PORT,(err)=>{
    if(err){
        console.log("error in server",err);
        
    }
    else{
        console.log("server is running",PORT);

    }
})