const router=require("express").Router()

const multer=require("multer")

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

let StudentController=require("../apis/student/studentController")
let CourseController=require("../apis/courses/courseController")
let teacherController=require("../apis/teacher/teacherController")


router.post("/teacher/add", teacherController.add)

router.post("/student/add",StudentController.add)
router.post("/student/all",StudentController.all)
router.post("/student/delete",StudentController.SoftDelete)
router.post("/student/update",StudentController.update)

router.post("/course/add",CourseController.add)
router.post("/course/all", CourseController.all)
router.post("/course/update", CourseController.update)
router.post("/course/delete", CourseController.SoftDelete)


module.exports=router