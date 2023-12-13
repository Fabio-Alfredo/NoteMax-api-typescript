import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { deleteNotes, getNotes, getNotesUser, postNotes, updateNotes } from "../services/notes.service";
import { Notes } from "../interfaces/notes.interface";
import { verifiedToken } from "../utils/jwt.handle";

const getNotesController = async (req: Request, res: Response) => {
    try {
        const response = await getNotes();
        res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_NOTES", e);
    }
}

const getNotesUserController = async (req: Request, res: Response) => {
    try {
        const auth = req.headers.authorization || "";
        const token = auth.split(" ").pop();

        if (token) {
            const tokenData = await verifiedToken(token);
            const id = tokenData.id;
            const response = await getNotesUser(id);
            res.send(response);
        }

    } catch (e) {
        handleHttp(res, "ERROR_GET_NOTES_USER", e)
    }
}

const postNotesController = async (req: Request, res: Response) => {
    try {
        const note: Notes = req.body as Notes;
        const auth = req.headers.authorization || "";
        const token = auth.split(" ").pop();

        if (token) {
            const tokenData = await verifiedToken(token);
            const id = tokenData.id;
            note.id_user = id;
            const response = await postNotes(note);
            res.send(response);
        }

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

const updateNotesController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await updateNotes(id, req.body);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE", e);
    }
}


export {
    getNotesController,
    postNotesController,
    deleteNotesController,
    updateNotesController,
    getNotesUserController
};