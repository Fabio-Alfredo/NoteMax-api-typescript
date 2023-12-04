import NotesModel from "../models/note.models"


const getNotes = async () => {
    const responseNotes = await NotesModel.find({});
    const data = !responseNotes ? responseNotes : "NOUT_NOTES";

    return data;
}

export {getNotes};