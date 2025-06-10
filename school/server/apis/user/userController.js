const userModel = require("./userModel")
const user= require("./userModel")
const bcrypt= require("bcrypt")
var jwt = require('jsonwebtoken')
const secretKey="123@321"

let login=(req,res)=>{

    let errMsg=[]

    if(!req.body.email){
        errMsg.push("Please Enter your Email")
    }
    if(!req.body.password){
        errMsg.push("Please Enter your Password")
    }

    if(errMsg.length>0){
        res.send({
            success: true,
            status: 200,
            messege: errMsg,

        })

    }
    else{
        
        userModel.findOne({email:req.body.email })
        .then((User)=>{
            if(!User){
                res.send({
                    success: false,
                    status: 200,
                    messege: "Login not SuccessFully",

                })
            }
            else{
                
                bcrypt.compare(req.body.password,User.password,function(err,isMatch){
                    if(!isMatch){
                        res.send({
                            status: 400,
                            success: false,
                            message: "password is wrong!!"
                        })
                    }

                    else{

                        const playLoad={
                            _id:User._id,
                            email: User.email,
                            name: User.password,
                            userType: User.userType
                        }

                        const token=jwt.sign(playLoad,secretKey)
                        res.send({
                            status: 200,
                            success: true,
                            message: User,
                            token:token
                        })
                    }
                })
                
            }
        })
        .catch((err)=>{
            res.send({
                success:false,
                status:202,
                messege:err,

            })
        })
    }
    
}


module.exports={login}