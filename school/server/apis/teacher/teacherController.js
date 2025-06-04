const teacherModel=require("./teacherModel")
const userModel=require("../user/userModel")


let add=(req,res)=>{

    let errMsgs=[]

    if (!req.body.name){
        errMsgs.push("Name is required")
    }
    
    if (!req.body.email){
        errMsgs.push("email is required")
    }
    if (!req.body.salary){
        errMsgs.push("salary is required")
    }
    if (!req.body.contact){
        errMsgs.push("contact is required")
    }
    
    


}

module.exports={
    add
}