const userModel = require("../user/userModel")
const User = require("../user/userModel")
const bcrypt = require("bcrypt")


const adminReg = (req, res) => {

    userModel.findOne({ email: req.body.req })
        .then((User) => {
            if (!User) {

                const newAdmin = new userModel()

                newAdmin.name = "admin"
                newAdmin.email = "admin@gmail.com"
                newAdmin.password = bcrypt.hashSync("123", 10)

                newAdmin.save()
                    .then((adminreg) => {
                        res.send({
                            status: 404,
                            success: true,
                            message: adminreg
                        })
                    })
                    .catch((err) => {

                    })
            }
            else {
                res.send({
                    status: 404,
                    success: false,
                    message: "Admin Already Exist"
                })
            }
        })
        .catch((err) => {

            res.send({
                status: 404,
                success: false,
                message: "Internal server error"
            })
        })


}


module.exports = {
    adminReg
}

