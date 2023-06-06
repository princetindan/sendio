import express from "express";
const router = express.Router();

import { registerUserController, userLoginController, getUserController} from "../controller/userController.js"
import { registerUserValidator, userLoginValidator } from "../validator/userValidator.js"
import {registerUserToken, userLoginToken, userVerifyToken} from "../middleware/userAuthMiddleware.js"


router.post("/registerUser", registerUserController, registerUserValidator, registerUserToken);
router.post("/userLogin", userLoginController, userLoginValidator, userLoginToken);
router.get("/getUser",userVerifyToken, getUserController);





export default router;