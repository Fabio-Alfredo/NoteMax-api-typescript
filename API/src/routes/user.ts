import { Router } from "express";
import { deleteUserController, getUserController, patchUserController, updateUserController } from "../controllers/user.controller";
import { checkRole } from "../middlewares/validateRole.middlware";
import { checkJwt } from "../middlewares/validateSesion.middlware";
import { updateNotesController } from "../controllers/notes.controller";

const router = Router();

router.delete('/:id',checkRole(['admin', 'superadmin']), deleteUserController);
router.get('/',checkRole(['admin', 'superadmin']), getUserController);
router.patch('/:id',checkRole(['superadmin']) , patchUserController);
router.put('/:id',checkJwt, updateUserController);

export {router};