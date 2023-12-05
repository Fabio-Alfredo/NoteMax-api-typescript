import { Router } from "express";
import { deleteNotesController, getNotesController, postNotesController, updateNotesController } from "../controllers/notes.controller";

const router = Router();

router.get('/', getNotesController);
router.post('/', postNotesController);
router.delete('/:id', deleteNotesController);
router.put('/:id', updateNotesController);

export {router};