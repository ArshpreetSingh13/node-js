const router=require("express").Router()
const multer  = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const trainerController=require("../apis/trainer/trainerController")
const customerController=require("../apis/customer/customerController")
const dietPlanController=require("../apis/dietPlan/dietPlanController")
const RequestTrainerController=require("../apis/RequestedTrainers/RequstedTrainerController")
const userController=require("../apis/users/userController")

router.post("/customer/add",upload.single("profile"),customerController.add)
router.post("/login",userController.login)
router.post("/trainer/add",trainerController.add)

// router.use(require("../middleware/middleware"))


router.post("/trainer/all",trainerController.all)
router.post("/trainer/getOne",trainerController.getOne)
router.post("/trainer/deleteOne",trainerController.deleteOne)
router.post("/trainer/updateOne",trainerController.updateOne)

router.post("/customer/all",customerController.all)
router.post("/customer/getOne",customerController.getOne)
router.post("/customer/deleteOne",customerController.deleteOne)
router.post("/customer/updateOne",customerController.updateOne)

router.post("/diet/add",dietPlanController.add)
router.post("/diet/all",dietPlanController.all)
router.post("/diet/getOne",dietPlanController.getOne)
router.post("/diet/deleteOne",dietPlanController.deleteOne)
router.post("/diet/updateOne",dietPlanController.updateOne)

router.post("/RedTrainer/add", RequestTrainerController.add)
router.post("/RedTrainer/all", RequestTrainerController.all)
router.post("/RedTrainer/getOne", RequestTrainerController.getOne)
router.post("/RedTrainer/deleteOne", RequestTrainerController.deleteOne)
router.post("/RedTrainer/updateOne", RequestTrainerController.updateOne)

module.exports= router