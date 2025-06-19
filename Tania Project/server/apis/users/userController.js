const userModel=require("./userModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const SecurityKet="123@#"

let login=()=>{

        let errMsg=[]
        if(!req.body.email){
            errMsg.push("Email is require")
            
        }
        if(!req.body.password){
            errMsg.push("Password is require")

        }

        if(errMsg.length>0){
            res.send({
                success:true,
                status:409,
                message:errMsg
            })
        }
        else{
            userModel.findOne({email:req.body.email})
            .then((User)=>{
                if(User==null){
                    res.send({
                        success: false,
                        status: 409,
                        message: "User Does Not Exist"
                    })
                }
                else{
                    bcrypt.compare(req.body.password,User.password,function(err,Ismatch){
                        if(!Ismatch){
                            res.send({
                                success:false,
                                status:206,
                                message:"Password Does Not Match"

                            })
                        }
                        else{
                            const payload={
                                id:User._id,
                                email:User.email,
                                password:User.password,
                                userType:User.userType
                            }
                            let token=jwt.sign(payload,SecurityKet)
                            res.send({
                                success: true,
                                status: 201,
                                message: "Password Does Not Match"

                            })
                        }
                    })
                }
            })
            .catch(()=>{
                res.send({
                    success: false,
                    status: 409,
                    message: "Internal server Error"
                })
            })
        }
}

module.exports={
    login
}