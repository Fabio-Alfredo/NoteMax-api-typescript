import { Router } from "express";
import { deleteNotesController, getNotesController, postNotesController } from "../controllers/notes.controller";

const router = Router();

router.get('/', getNotesController);
router.post('/', postNotesController);
router.delete('/:id', deleteNotesController);

export {router};