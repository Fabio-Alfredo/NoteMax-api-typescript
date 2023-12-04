import { Schema, model } from "mongoose";
import { Notes } from "../interfaces/notes.interface";

const NotesSchema = new Schema<Notes>(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        type:{
            type:String,
            enum:['draft', 'math', 'social', 'friends'],
            required:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const NotesModel = model("notes", NotesSchema);
export default NotesModel