const SubCategoryModel=require("./SubCategoryModel");


const add=(req,res)=>{

    

    let validation=""
    if (!req.body.subCategoryName){
        validation ="Subcategory name is require."
    }
    if (!req.file){
        validation +=" Image is require."
    }
    if (!!validation){
        res.send({
            success:false,
            status:500,
            message: validation

        })
    }else{

        SubCategoryModel.findOne({ subCategoryName: req.body.subCategoryName }).then(async(SubCategoryData)=>{
            if (SubCategoryData){
                res.send({
                    success: false,
                    status: 400,
                    message: "Already Exist"


                })

            } else{

                let totalDocuments =await SubCategoryModel.countDocuments()
                let NewSubCategory = new SubCategoryModel()


                NewSubCategory.autoId = totalDocuments+1
                NewSubCategory.subCategoryName = req.body.subCategoryName
                NewSubCategory.category = req.body.category
                NewSubCategory.img = "SubCategoryImages/" + req.file.filename
                NewSubCategory.description = req.body.description
                NewSubCategory.save().then((NewSubCategoryResult) => {
                    res.send({
                        success: true,
                        status: 201,
                        message: NewSubCategoryResult


                    })
                }).catch((err) => {
                    res.send({
                        success: false,
                        status: 500,
                        message: err
                    })
                })

            }
            
        }).catch(()=>{
            res.send({
                success: false,
                status: 500,
                message: err
            })
        })
        

        

    }
}

const all=(req,res)=>{
    SubCategoryModel.find({ status:true}).then((result)=>{
        res.send({
            success:true,
            status:200,
            message:"sub Category Found",
            total:result.length,
            data:result
        })
    }).catch((err)=>{
        res.send({
            success: false,
            status: 404,
            message: "sub Category not Found"
        
        })
    })
}


const getOne = (req, res) => {
    

    let validation = ""
    if (!req.body._id) {
        validation = " ID is require."
    }
   
    
    if (!!validation) {
        res.send({
            success: false,
            status: 500,
            message: validation

        })
    }else{

    SubCategoryModel.findOne({_id:req.body._id}).then((result) => {
        res.send({
            success: true,
            status: 200,
            message: "sub Category Found",
            total: result.length,
            data: result
        })
    }).catch((err) => {
        res.send({
            success: false,
            status: 404,
            message: "sub Category not Found"

        })
    })
}

}

const Delete = (req, res) => {
    

    let validation = ""
    if (!req.body._id) {
        validation = " ID is require."
    }
   
    
    if (!!validation) {
        res.send({
            success: false,
            status: 500,
            message: validation

        })
    }else{

    SubCategoryModel.findOne({_id:req.body._id}).then((result) => {
       if(!result){
           res.send({
               success: false,
               status: 404,
               message: "sub not Category Found",
              
               
           })
       }
       else{
          SubCategoryModel.deleteOne({_id:req.body._id}).then((delte)=>{
              res.send({
                  success: true,
                  status: 200,
                  message: "sub Category Found",
                  data: delte
              })
          }).catch((error)=>{
              res.send({
                  success: false,
                  status: 404,
                  message: "failed"
                  
              })
          })
       }
    }).catch((err) => {
        res.send({
            success: false,
            status: 404,
            message: "sub Category not Found"

        })
    })
}

}
const softDelete = (req, res) => {
    

    let validation = ""
    if (!req.body._id) {
        validation = " ID is require."
    }
   
   
    
    if (!!validation) {
        res.send({
            success: false,
            status: 500,
            message: validation

        })
    }else{

    SubCategoryModel.findOne({_id:req.body._id}).then((softCategory) => {
       if(!softCategory){
           res.send({
               success: false,
               status: 404,
               message: "sub not Category d Found",
              
               
           })
       }
       else{
           softCategory.status = !softCategory.status

           SubCategoryModel.save()
        
       }
    }).catch((err) => {
        res.send({
            success: false,
            status: 404,
            message: "sub Category not Found"

        })
    })
}

}
const update = (req, res) => {
    

    let validation = ""
    if (!req.body._id) {
        validation = " ID is require."
    }
   
    
    if (!!validation) {
        res.send({
            success: false,
            status: 500,
            message: validation

        })
    }else{

    SubCategoryModel.findOne({_id:req.body._id}).then((result) => {
       if(!result){
           res.send({
               success: false,
               status: 404,
               message: "sub not Category Found",
              
               
           })
       }
       else{
          SubCategoryModel.updateOne({_id:req.body._id,
              subCategoryName: req.body.subCategoryName,
          }).then((delte)=>{
              res.send({
                  success: true,
                  status: 200,
                  message: "sub Category Found",
                  data: delte
              })
          }).catch((error)=>{
              res.send({
                  success: false,
                  status: 404,
                  message: "failed"
                  
              })
          })
       }
    }).catch((err) => {
        res.send({
            success: false,
            status: 404,
            message: "sub Category not Found"

        })
    })
}

}

module.exports={
    add,
    all,
    getOne,
    Delete,
    update,
    softDelete
}