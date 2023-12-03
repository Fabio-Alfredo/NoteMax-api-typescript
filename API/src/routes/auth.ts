import { Router } from "express";
import { registerUserController } from "../controllers/auth.controller";

const router = Router();

router.post('/register', registerUserController);
router.post('/login');

export {router};