const reqTrainerModel = require("./RequstedTrainerModel")


let add = (req, res) => {

    let errMsg = []

    if (!req.body.trainerId) {
        errMsg.push("trainerId is require")
    }
    if (!req.body.customerId) {
        errMsg.push("customerId is require")
    }


    if (errMsg.length > 0) {
        res.send({
            success: false,
            status: 202,
            message: errMsg
        })
    }
    else {
        const NewReq = new reqTrainerModel()

        NewReq.trainerId = req.body.trainerId
        NewReq.customerId = req.body.customerId
             
        
        NewReq.save().then((SaveReq) => {
                res.send({
                    success: true,
                    status: 201,
                    message: SaveReq
                })
            }).catch(() => {
                res.send({
                    success: false,
                    status: 202,
                    message: "Diet Not Saved"
                })
            })
    }

}

let all = (req, res) => {
    reqTrainerModel.find({ status: true })
        .populate("trainerId")
        .populate("customerId")
        .then((ReqTraner) => {
            if (ReqTraner == null) {
                res.send({
                    success: false,
                    status: 402,
                    message: "ReqTraner Not Found"
                })
            }
            else {
                res.send({
                    success: true,
                    status: 201,
                    message: "ReqTraner Found",
                    data: ReqTraner
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



        reqTrainerModel.findOne({ _id: req.body._id, status: true })
            .populate("trainerId")
            .populate("customerId")
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



        reqTrainerModel.findOne({ _id: req.body._id })
            .populate("trainerId")
            .populate("customerId")
            .then((reqTrainer) => {
                if (reqTrainer == null) {
                    res.send({
                        success: false,
                        status: 402,
                        message: "reqTrainer Not Found"
                    })
                }
                else {
                    reqTrainer.status = !reqTrainer.status
                    reqTrainer.save()
                        .then((ChangedData) => {
                            res.send({
                                success: true,
                                status: 201,
                                message: "reqTrainer saved",
                                data: ChangedData
                            })
                        })
                        .catch(() => {
                            res.send({
                                success: false,
                                status: 203,
                                message: "reqTrainer not saved"

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



        reqTrainerModel.findOne({ _id: req.body._id })
            .populate("trainerId")
            .populate("customerId")
            .then((ReqTrainer) => {
                if (ReqTrainer == null) {
                    res.send({
                        success: false,
                        status: 402,
                        message: "ReqTrainer Not Found"
                    })
                }
                else {


                    if (req.body.trainerId) {
                        ReqTrainer.trainerId = req.body.trainerId
                    }
                    if (req.body.customerId) {
                        ReqTrainer.customerId = req.body.customerId
                    }
                   
                    ReqTrainer.save()
                        .then((ChangedData) => {
                            res.send({
                                success: true,
                                status: 201,
                                message: "ReqTrainer saved",
                                data: ChangedData
                            })
                        })
                        .catch(() => {
                            res.send({
                                success: false,
                                status: 203,
                                message: "ReqTrainer not saved"

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