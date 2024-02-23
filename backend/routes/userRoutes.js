import express  from "express";
import { authUser, registerUser ,upadatePicture } from "../controller/userController.js";
const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(authUser)
router.route('/updatePicture/:id').post(upadatePicture)

export default router