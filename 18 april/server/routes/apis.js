let router=require("express").Router()
const multer = require('multer')


let categoryController=require("../apis/category/categoriesController")


router.post("/category/add_category/add", categoryController.add)


let SubCategoryController=require("../apis/subCategory/SubCategoryController")


const SubCategoryStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './server/public/SubCategoryImages/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
    }
})

const SubCategoryUpload = multer({ storage: SubCategoryStorage })

router.post("/subCategory/add_subcategory", SubCategoryUpload.single('img'), SubCategoryController.add)


module.exports= router