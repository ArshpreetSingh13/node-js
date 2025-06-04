const courseModel = require("./courseModel")
const {uploadImg} =require("../../utility/helper")

let add = (req, res) => {



    let validation = []
    if (!req.body.name) {
        validation.push( "Name is required. ")
    }
    if (!req.body.description) {
        validation.push( "description is required. ")
    }
    if (!req.body.image) {
        validation.push( "image is required. ")
    }

    if (validation.length>0) {
        res.send({
            success: false,
            message: validation,
            status: 201
        })
    }
    else {
        courseModel.findOne({ name: req.body.name }).then(async (existCourse) => {
            if (existCourse) {
                res.send({
                    success: false,
                    message: "Course Exist",
                    status: 201
                })
            }
            else {
                let total = await courseModel.countDocuments()
                let newCourse = new courseModel

                newCourse.autoId = total + 1
                newCourse.name = req.body.name
                newCourse.description = req.body.description
                newCourse.image = req.body.image

                newCourse.save().then((COURSE) => {
                    res.send({
                        success: true,
                        message: COURSE,
                        status: 200
                    })
                }).catch(() => {
                    res.send({
                        success: false,
                        message: "Not added",
                        status: 201
                    })
                })
            }
        })


    }
}

let SoftDelete = async (req, res) => {

    let validation = ""

    if (!req.body._id) {
        validation = "Id is required. "
    }

    if (!!validation) {
        res.send({
            success: false,
            message: validation,
            status: 201
        })
    }
    else {
        await courseModel.findOne({ _id: req.body._id }).then((result) => {
            if (!result) {

                res.send({
                    success: false,
                    message: "Not Found",
                    status: 201
                })
            }
            else {
                result.status = !result.status
                result.save().then((Final) => {
                    res.send({
                        success: true,
                        message: Final,
                        status: 200
                    })
                }).catch((err) => {
                    res.send({
                        success: false,
                        message: err,
                        status: 201
                    })
                })

            }
        }).catch((err) => {
            res.send({
                success: false,
                message: "delete fail",
                status: 201
            })
        })
    }
}

let all = (req, res) => {
    courseModel.find({ status: true }).then((result) => {
        res.send({
            success: true,
            status: 201,
            message: "Course Found",
            total: result.length,
            data: result
        })
    }).catch((err) => {
        res.send({
            success: false,
            message: "not Found",
            status: 404
        })
    })
}

let update = async (req, res) => {

    validation = ""

    if (!req.body._id) {
        validation = "ID is required"
    }


    // validation=[]

    // if (req.body._id) {
    //     validation.push("Id is required")
    //     }

    if (!!validation) {
        res.send({
            success: false,
            status: 201,
            message: validation
        })
    }
    else {
        await courseModel.findOne({ _id: req.body._id }).then((result) => {

            
            if (!result) {
                res.send({
                    success: false,
                    status: 201,
                    message: "Not found",
                    data: data
                })
            }
            else {

                if (req.body.name) {
                    result.name = req.body.name
                }
                if (req.body.description) {
                    result.description = req.body.description
                }
                // if (req.body.image) {
                //     result.image = req.body.image
                // }

                // if(req.body){
                //     try{
                //         let url= await uploadImg(req.file.buffer)
                //     }
                //     catch{

                //     }
                // }
                result.save().then((data) => {
                    res.send({
                        success: true,
                        status: 201,
                        message: "Updated",
                        data: data
                    })
                }).catch((err) => {
                    res.send({
                        success: true,
                        status: 201,
                        message: "Not Updated"

                    })
                })
            }
        }).catch((err) => {
            res.send({
                success: false,
                message: "Not found",
                status: 404
            })
        })
    }
}


module.exports = {
    add,
    all,
    SoftDelete,
    update
   
}