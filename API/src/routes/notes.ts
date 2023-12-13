import { Router } from "express";
import { deleteNotesController, getNotesController, getNotesUserController, postNotesController, updateNotesController } from "../controllers/notes.controller";
import { checkJwt } from "../middlewares/validateSesion.middlware";
import { checkRole } from "../middlewares/validateRole.middlware";

const router = Router();

router.get('/', checkJwt, checkRole(['admin', 'superadmin']), getNotesController);
router.get('/user', getNotesUserController);
router.post('/', postNotesController);
router.delete('/:id', deleteNotesController);
router.put('/:id', updateNotesController);

export { router };