import { Router } from "express";
import { deleteUserController, getUserController, patchUserRoleController, updateUserController } from "../controllers/user.controller";
import { checkRole } from "../middlewares/validateRole.middlware";
import { checkJwt } from "../middlewares/validateSesion.middlware";

const router = Router();

router.delete('/:id',checkRole(['admin', 'superadmin']), deleteUserController);
router.get('/',checkRole(['admin', 'superadmin']), getUserController);
router.patch('/:id',checkRole(['superadmin']) , patchUserRoleController);
router.put('/:id',checkJwt, updateUserController);
router.patch('/pass/:id', checkJwt, updateUserController);

export {router};