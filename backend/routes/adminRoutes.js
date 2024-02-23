import express  from "express";
import { Delete, UpdateUser, authAdmin,getUsers,searchUser,AddUser } from "../controller/adminController.js";
const router = express.Router()


router.route('/login').post(authAdmin)
router.route('/searchuser').post(searchUser)
router.route('/deleteuser/:id').post(Delete)
router.route('/updateuser/:id').post(UpdateUser)
router.route('/adduser').post(AddUser)

router.route('/userdata').get(getUsers)

export default router