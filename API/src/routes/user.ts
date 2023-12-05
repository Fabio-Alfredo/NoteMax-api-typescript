import { Router } from "express";
import { deleteUserController, getUserController } from "../controllers/user.controller";

const router = Router();

router.delete('/:id', deleteUserController);
router.get('/', getUserController);

export {router};