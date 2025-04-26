const Category = require("./categoryModel")

let add = (req, res) => {

    validation = ""
    if (!req.body.name) {
        validation = "name id required"
    }
    if (!!validation) {
        res.send({
            success: false,
            status: 402,
            message: validation
        })
    }
    else {
        Category.findOne({name:req.body.name}).then( async (categoryData)=>{
            if (categoryData){
                res.send({
                    success: false,
                    status: 402,
                    message: "Already Exist"
                })
            } else{
                let totalCategories = await Category.countDocuments()
                let NewCategory = new Category()



                NewCategory.autoId = totalCategories+1
                NewCategory.name = req.body.name
                NewCategory.description = req.body.description
                NewCategory.save().then((savedCategory) => {
                    res.send({
                        success: true,
                        status: 201,
                        message: "Category Added Successfully",
                        data: savedCategory
                    })
                }).catch((err) => {
                    res.send({

                        success: false,
                        status: 500,
                        message: err.message
                    })
                })

            }
        }).catch((err)=>{
            res.send({
                success: false,
                status: 500,
                message: err.message
            })
        })


       
    }

}


module.exports={
    add
}