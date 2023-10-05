import express  from "express";
import { authAdmin,getUsers,searchUser } from "../controller/adminController";
const router = express.Router()


router.route('/login').post(authAdmin)
router.route('/userdata').get(getUsers)
router.route('/searchuser').post(searchUser)


export default router