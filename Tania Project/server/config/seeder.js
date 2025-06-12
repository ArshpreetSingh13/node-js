const userModel=require("../apis/users/userModel")
const bcrypt=require("bcrypt")

let adminAdd=()=>{
    userModel.findOne({email:"admin@gmail.com"})
    .then((exist)=>{
        if(exist==null){
            const NewAdmin= new userModel

            NewAdmin.name="admin"
            NewAdmin.email="admin@gmail.com"
            NewAdmin.userType ="1"
            NewAdmin.password=bcrypt.hashSync("123",10)

            NewAdmin.save().then(()=>{
                console.log("Admin Created");
                
            })
            .catch(()=>{
                console.log("error in admin creation");
                
            })
        }
        else{
            console.log("Admin Exist");
            
        }
    })
    .catch((err)=>{
        console.log("Internal server Err",err);
        
    })
}

module.exports={
    adminAdd
}