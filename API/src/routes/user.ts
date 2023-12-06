import { Router } from "express";
import { deleteUserController, getUserController, patchUserController } from "../controllers/user.controller";
import { checkRole } from "../middlewares/validateRole.middlware";

const router = Router();

router.delete('/:id',checkRole(['admin', 'superadmin']), deleteUserController);
router.get('/',checkRole(['admin', 'superadmin']), getUserController);
router.patch('/:id',checkRole(['superadmin']) , patchUserController);

export {router};