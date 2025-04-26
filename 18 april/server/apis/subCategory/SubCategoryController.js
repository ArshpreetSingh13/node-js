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

module.exports={
    add
}