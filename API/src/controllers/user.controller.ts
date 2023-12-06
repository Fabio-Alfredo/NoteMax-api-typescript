import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { deleteUser, getUsers, patchUser, updateUser } from "../services/user.service";
import { updateNotes } from "../services/notes.service";

const deleteUserController = async ({params}:Request, res:Response)=>{
    try{
        const {id} = params;
        const response = await deleteUser(id);
        res.send(response);
    }catch(e){
        handleHttp(res, "ERROR_DELETE_USER", e);
    }
}

const getUserController = async (req:Request, res:Response)=>{
    try{
        const response = await getUsers();
        res.send(response);
    }catch(e){
        handleHttp(res, "ERROR_GET_USERS", e);
    }
}

const patchUserController = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params;
        const info = req.body.role;
        const response = await patchUser(id, info);
        res.send(response);
    }catch(e){
        handleHttp(res, "ERROR_PATCH", e)
    }
}

const updateUserController = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
        const user = req.body;
        const response = await updateUser(id, user);
        res.send(response);
    }catch(e){
        handleHttp(res, "ERROR_UPDATE", e);
    }
}

export{deleteUserController, getUserController, patchUserController, updateUserController};