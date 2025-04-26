const express=require("express")

const app=express()

let PORT=4000
app.use(express.urlencoded())
app.use(express.json())


app.get("/",(req,res)=>{

    res.send("Welcome")
})


app.post("/register",(req,res)=>{


    res.send({
        status: 200,
        success:true,
        massage:'Registed Successfull',
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact
        
    })
      
})



app.listen(PORT,(err)=>{

    if(err){
        console.log("Server is not created",err);
        
    }
    else{
        console.log("Server is created",PORT);
    }
})