const customerModel = require("./customerModel")
const userModel = require("../users/userModel")

let add = (req, res) => {

    let errMsg = []

    if (!req.body.name) {
        errMsg.push("name is require")
    }
    if (!req.body.email) {
        errMsg.push("email is require")
    }
    if (!req.body.password) {
        errMsg.push("password is require")
    }
   
    if (!req.body.address) {
        errMsg.push("address is require")
    }
    if (!req.body.gender) {
        errMsg.push("gender is require")
    }
    if (!req.body.profile) {
        errMsg.push("profile is require")
    }
    if (!req.body.contact) {
        errMsg.push("contact is require")
    }

    if (errMsg.length > 0) {
        res.send({
            success: false,
            status: 202,
            message: errMsg
        })
    }
    else {
        customerModel.findOne({ email: req.body.email })
            .then((NewData) => {
                if (NewData == null) {

                    const newUser = new userModel()

                    newUser.name = req.body.name
                    newUser.email = req.body.email
                    newUser.password = req.body.password
                    newUser.userType = "1"

                    newUser.save()
                        .then((savedData) => {
                            const newCustomer = new customerModel

                            newCustomer.name = req.body.name
                            newCustomer.email = req.body.email
                            newCustomer.address = req.body.address
                            newCustomer.gender = req.body.gender
                            newCustomer.profile = req.body.profile
                            newCustomer.contact = req.body.contact
                            newCustomer.userId = savedData._id

                            newCustomer.save()
                                .then((SavedTrainer) => {
                                    res.send({
                                        success: true,
                                        status: 201,
                                        message: SavedTrainer
                                    })
                                })
                                .catch(() => {
                                    res.send({
                                        success: false,
                                        status: 202,
                                        message: "Trainer Not Saved"
                                    })
                                })
                        })
                        .catch(() => {
                            res.send({
                                success: false,
                                status: 202,
                                message: "User Not Saved"
                            })
                        })

                }
                else {

                    res.send({
                        success: false,
                        status: 202,
                        message: "User Already Exist"
                    })

                }
            })
            .catch(() => {
                res.send({
                    success: false,
                    status: 202,
                    message: "Internal server error"
                })
            })
    }

}

let all = (req, res) => {
    customerModel.find({ status: true })
        .populate("userId")

        .then((Users) => {
            if (Users == null) {
                res.send({
                    success: false,
                    status: 402,
                    message: "Users Not Found"
                })
            }
            else {
                res.send({
                    success: true,
                    status: 201,
                    message: "Users Found",
                    data: Users
                })
            }
        })
        .catch(() => {
            res.send({
                success: false,
                status: 402,
                message: "Internal server Error"
            })
        })
}

let getOne = (req, res) => {

    let errMsg = []

    if (!req.body._id) {
        errMsg.push("_id is require")
    }
    if (errMsg.length > 0) {
        res.send({
            success: false,
            status: 202,
            message: errMsg
        })
    }
    else {



        customerModel.findOne({ _id: req.body._id, status: true })
            .populate("userId")
            .then((Users) => {
                if (Users == null) {
                    res.send({
                        success: false,
                        status: 402,
                        message: "Users Not Found"
                    })
                }
                else {
                    res.send({
                        success: true,
                        status: 201,
                        message: "Users Found",
                        data: Users
                    })
                }
            })
            .catch(() => {
                res.send({
                    success: false,
                    status: 402,
                    message: "Internal server Error"
                })
            })
    }

}


let deleteOne = (req, res) => {

    let errMsg = []

    if (!req.body._id) {
        errMsg.push("_id is require")
    }
    if (errMsg.length > 0) {
        res.send({
            success: false,
            status: 202,
            message: errMsg
        })
    }
    else {



        customerModel.findOne({ _id: req.body._id })
            .then((Users) => {
                if (Users == null) {
                    res.send({
                        success: false,
                        status: 402,
                        message: "Users Not Found"
                    })
                }
                else {
                    userModel.findOne({_id:Users.userId})
                    .then((UserM)=>{
                        if(UserM==null){
                            res.send({
                                success:false,
                                status:406,
                                message:"User is not in Users List"
                            })
                        }
                        else{
                            
                            UserM.status = !UserM.status
                            UserM.save()                              

                            Users.status = !Users.status
                            Users.save()
                                .then((ChangedData) => {
                                    res.send({
                                        success: true,
                                        status: 201,
                                        message: "Users saved",
                                        data: ChangedData
                                    })
                                })
                                .catch(() => {
                                    res.send({
                                        success: false,
                                        status: 203,
                                        message: "Users not saved"

                                    })
                                    })
                        }

                    })

                   

                }
            })
            .catch(() => {
                res.send({
                    success: false,
                    status: 402,
                    message: "Internal server Error"
                })
            })
    }

}


let updateOne = (req, res) => {

    let errMsg = []

    if (!req.body._id) {
        errMsg.push("_id is require")
    }
    if (errMsg.length > 0) {
        res.send({
            success: false,
            status: 202,
            message: errMsg
        })
    }
    else {



        customerModel.findOne({ _id: req.body._id })
            .then((Users) => {
                if (Users == null) {
                    res.send({
                        success: false,
                        status: 402,
                        message: "Users Not Found"
                    })
                }
                else {


                    if (req.body.name) {
                        Users.name = req.body.name
                    }
                    if (req.body.email) {
                        Users.email = req.body.email
                    }
                    if (req.body.address) {
                        Users.address = req.body.address
                    }
                    if (req.body.gender) {
                        Users.gender = req.body.gender
                    }
                    if (req.body.profile) {
                        Users.profile = req.body.profile
                    }
                    if (req.body.contact) {
                        Users.contact = req.body.contact
                    }
                    Users.save()
                        .then((ChangedData) => {
                            res.send({
                                success: true,
                                status: 201,
                                message: "Users saved",
                                data: ChangedData
                            })
                        })
                        .catch(() => {
                            res.send({
                                success: false,
                                status: 203,
                                message: "Users not saved"

                            })
                        })

                }
            })
            .catch(() => {
                res.send({
                    success: false,
                    status: 402,
                    message: "Internal server Error"
                })
            })
    }

}


module.exports = {
    add,
    all,
    getOne,
    deleteOne,
    updateOne
}