const dietModel = require("./dietPlanModel")


let add = (req, res) => {

    let errMsg = []

    if (!req.body.trainerId) {
        errMsg.push("trainerId is require")
    }
    if (!req.body.customerId) {
        errMsg.push("customerId is require")
    }
    if (!req.body.week) {
        errMsg.push("week is require")
    }
   
    if (!req.body.day1) {
        errMsg.push("day1 is require")
    }
    if (!req.body.day2) {
        errMsg.push("day2 is require")
    }
    if (!req.body.day3) {
        errMsg.push("day3 is require")
    }
    if (!req.body.day4) {
        errMsg.push("day4 is require")
    }
    if (!req.body.day5) {
        errMsg.push("day5 is require")
    }
    if (!req.body.day6) {
        errMsg.push("day6 is require")
    }
    if (!req.body.day7) {
        errMsg.push("day7 is require")
    }


    if (errMsg.length > 0) {
        res.send({
            success: false,
            status: 202,
            message: errMsg
        })
    }
    else {
        const NewDiet = new dietModel()

        NewDiet.trainerId = req.body.trainerId
        NewDiet.customerId = req.body.customerId
        NewDiet.week = req.body.week
        NewDiet.day1 = req.body.day1
        NewDiet.day2 = req.body.day2
        NewDiet.day3 = req.body.day3
        NewDiet.day4 = req.body.day4
        NewDiet.day5 = req.body.day5
        NewDiet.day6 = req.body.day6
        NewDiet.day7 = req.body.day7
        
        
        NewDiet.save().then((SavedDiet) => {
                res.send({
                    success: true,
                    status: 201,
                    message: SavedDiet
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
    dietModel.find({ status: true })
        .populate("trainerId")
        .populate("customerId")
        .then((DIET) => {
            if (DIET == null) {
                res.send({
                    success: false,
                    status: 402,
                    message: "DIET Not Found"
                })
            }
            else {
                res.send({
                    success: true,
                    status: 201,
                    message: "DIET Found",
                    data: DIET
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



        dietModel.findOne({ _id: req.body._id, status: true })
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



        dietModel.findOne({ _id: req.body._id })
            .then((DIET) => {
                if (DIET == null) {
                    res.send({
                        success: false,
                        status: 402,
                        message: "DIET Not Found"
                    })
                }
                else {
                    DIET.status = !DIET.status
                    DIET.save()
                        .then((ChangedData) => {
                            res.send({
                                success: true,
                                status: 201,
                                message: "DIET saved",
                                data: ChangedData
                            })
                        })
                        .catch(() => {
                            res.send({
                                success: false,
                                status: 203,
                                message: "DIET not saved"

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



        dietModel.findOne({ _id: req.body._id })
            .then((DIET) => {
                if (DIET == null) {
                    res.send({
                        success: false,
                        status: 402,
                        message: "DIET Not Found"
                    })
                }
                else {


                    if (req.body.trainerId) {
                        DIET.trainerId = req.body.trainerId
                    }
                    if (req.body.customerId) {
                        DIET.customerId = req.body.customerId
                    }
                    if (req.body.week) {
                        DIET.week = req.body.week
                    }
                    if (req.body.day1) {
                        DIET.day1 = req.body.day1
                    }
                    if (req.body.day2) {
                        DIET.day2 = req.body.day2
                    }
                    if (req.body.day3) {
                        DIET.day3 = req.body.day3
                    }
                    if (req.body.day4) {
                        DIET.day4 = req.body.day4
                    }
                    if (req.body.day5) {
                        DIET.day5 = req.body.day5
                    }
                    if (req.body.day6) {
                        DIET.day6 = req.body.day6
                    }
                    if (req.body.day7) {
                        DIET.day7 = req.body.day7
                    }
                    DIET.save()
                        .then((ChangedData) => {
                            res.send({
                                success: true,
                                status: 201,
                                message: "DIET saved",
                                data: ChangedData
                            })
                        })
                        .catch(() => {
                            res.send({
                                success: false,
                                status: 203,
                                message: "DIET not saved"

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