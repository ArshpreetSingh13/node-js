const monsooge=require("mongoose")

let TeacherSchema = monsooge.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    salary:{type:Number,default:""},
    contact:{type:Number,default:""},
    UMID: { type: monsooge.Schema.Types.ObjectId, default:"users"},
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = monsooge.model("Teacher", TeacherSchema)