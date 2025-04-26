const mongoose=require("mongoose");

let SubCategorySchema=new mongoose.Schema({
    autoId:{ type:Number,default:0},
    subCategoryName:{ type:String,default: ''},
    category:{ type:String,default: ''},
    img:{ type:String,default: 'No_image.png'},
    description: { type: String, default: 'no discription' },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model("SubCategory", SubCategorySchema)