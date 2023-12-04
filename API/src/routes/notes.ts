import { Router } from "express";
import { getNotesController, postNotesController } from "../controllers/notes.controller";

const router = Router();

router.get('/', getNotesController);
router.post('/', postNotesController);

export {router};