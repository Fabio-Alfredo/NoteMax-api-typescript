import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { deleteNotes, getNotes, postNotes } from "../services/notes.service";
import { Notes } from "../interfaces/notes.interface";

const getNotesController = async (req: Request, res: Response) => {
    try {
        const response = await getNotes();
        res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_NOTES", e);
    }
}

const postNotesController = async (req: Request, res: Response) => {
    try {
        const note: Notes = req.body as Notes;
        await postNotes(note);
        res.send("NOTE_CREATED");
    } catch (e) {
        handleHttp(res, "ERROR_NOTE", e)
    }
}

const deleteNotesController = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await deleteNotes(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_NOTE", e)
    }
}


export { getNotesController, postNotesController, deleteNotesController };