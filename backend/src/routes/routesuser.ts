import { Router } from "express";
import { loginUser, newUser } from "../controllers/controlleruser";

const router=Router();

router.post('/',newUser);
router.post('/login',loginUser)


export default router;