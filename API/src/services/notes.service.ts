import { Notes } from "../interfaces/notes.interface";
import NotesModel from "../models/note.models"


const getNotes = async () => {
    const responseNotes = await NotesModel.find({});
    const data = responseNotes ? responseNotes : "NOUT_NOTES";

    return data;
}

const postNotes = async (note:Notes)=>{
    const responseNotes = await NotesModel.create(note);
    return responseNotes;
}

const deleteNotes = async (id:string)=>{
    const responseNotes = await NotesModel.deleteOne({id:id});
    return responseNotes;
}

const updateNotes = async (id:string, note:Notes)=>{
    const responseNotes = await NotesModel.updateOne({_id:id}, note);
    return responseNotes;
}
export {getNotes, postNotes, deleteNotes, updateNotes};