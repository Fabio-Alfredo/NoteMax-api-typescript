import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { getNotes, postNotes } from "../services/notes.service";

const getNotesController = async (req: Request, res: Response) => {
    try {
        const response = await getNotes();
        res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_NOTES", e);
    }
}

const postNotesController = async ({body}: Request, res: Response) => {
    try{
        const response = await postNotes(body);
        res.send(response);
    }catch(e){
        handleHttp(res, "ERROR_NOTE", e)
    }
}


export { getNotesController, postNotesController};