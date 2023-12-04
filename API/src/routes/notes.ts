import { Router } from "express";
import { getNotesController } from "../controllers/notes.controller";

const router = Router();

router.get('/', getNotesController);
router.post('/');

export {router};