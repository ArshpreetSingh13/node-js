const router=require("express").Router()

let StudentController=require("../apis/student/studentController")


router.post("/student/add",StudentController.add)
router.post("/student/all",StudentController.all)
router.post("/student/delete",StudentController.SoftDelete)
router.post("/student/update",StudentController.update)


module.exports=router