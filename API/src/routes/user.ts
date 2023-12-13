import { Router } from "express";
import { deleteUserController, getUserController, patchUserRoleController, updateUserController, patchUserPassController } from "../controllers/user.controller";
import { checkRole } from "../middlewares/validateRole.middlware";
import { checkJwt } from "../middlewares/validateSesion.middlware";

const router = Router();

router.delete('/:id', checkJwt, checkRole(['admin', 'superadmin']), deleteUserController);
router.get('/', checkJwt, checkRole(['admin', 'superadmin']), getUserController);
router.patch('/:id', checkRole(['superadmin']), patchUserRoleController);
router.put('/', checkJwt, updateUserController);
router.patch('/pass/:id', checkJwt, patchUserPassController);

export { router };