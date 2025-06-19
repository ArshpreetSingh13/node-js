const jwt=require("jsonwebtoken")
const SecurityKey="123@#"

module.exports=(req,res,next)=>{

    let token = req.header["Authentication"]
    jwt.verify(token,SecurityKey,function(err,data){

        if(err){
            res.send({
                success:false,
                status:409,
                message: "Access denided"
            })
        }
        else{
            req.decoded=data
            next()
        }
    })
}