import { Notes } from "../interfaces/notes.interface";
import NotesModel from "../models/note.models"


const getNotes = async () => {
    const responseNotes = await NotesModel.find({});
    const data = !responseNotes ? responseNotes : "NOUT_NOTES";

    return data;
}

const postNotes = async (note:Notes)=>{
    const responseNotes = await NotesModel.create(note);
    return responseNotes;
}

export {getNotes, postNotes};