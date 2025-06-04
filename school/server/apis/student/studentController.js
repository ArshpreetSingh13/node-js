const StudentModel = require("./studentModel")

let add = (req, res) => {



    let validation = ""
    if (!req.body.name) {
        validation = "Name is required. "
    }
    if (!req.body.course) {
        validation += "course is required. "
    }
    if (!req.body.age) {
        validation += "Age is required. "
    }
    if (!req.body.dob) {
        validation += "DOB is required. "
    }

    if (!req.body.registerDate) {
        validation += "Registeration Date is required. "
    }
    if (!req.body.fatherName) {
        validation += "Father's Name is required. "
    }
    if (!req.body.motherName) {
        validation += "Father's Name is required. "
    }

    if (!!validation) {
        res.send({
            success: false,
            message: validation,
            status: 201
        })
    }
    else {
        StudentModel.findOne({ name: req.body.name, fatherName: req.body.fatherName, motherName: req.body.motherName }).then(async (existStudent) => {
            if (existStudent) {
                res.send({
                    success: false,
                    message: "Student Exist",
                    status: 201
                })
            }
            else {
                let total = await StudentModel.countDocuments()
                let newStudent = new StudentModel

                newStudent.autoId = total + 1
                newStudent.name = req.body.name
                newStudent.course = req.body.course
                newStudent.age = req.body.age
                newStudent.dob = req.body.dob
                newStudent.registerDate = req.body.registerDate
                newStudent.fatherName = req.body.fatherName
                newStudent.motherName = req.body.motherName

                newStudent.save().then((STUDENT) => {
                    res.send({
                        success: true,
                        message: STUDENT,
                        status: 200
                    })
                }).catch(() => {
                    res.send({
                        success: false,
                        message: validation,
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
        await StudentModel.findOne({ _id: req.body._id }).then((result) => {
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
    StudentModel.find({ status: true }).then((result) => {
        res.send({
            success: true,
            status: 201,
            message: "sub Category Found",
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
        await StudentModel.findOne({ _id: req.body._id }).then((result) => {

            
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
                if (req.body.age) {
                    result.age = req.body.age
                }
                if (req.body.dob) {
                    result.dob = req.body.dob
                }
                if (req.body.registerDate) {
                    result.registerDate = req.body.registerDate
                }
                if (req.body.registerDate) {
                    result.registerDate = req.body.registerDate
                }
                if (req.body.fatherName) {
                    result.fatherName = req.body.fatherName
                }
                if (req.body.motherName) {
                    result.motherName = req.body.motherName
                }

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