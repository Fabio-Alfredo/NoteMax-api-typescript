import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { deleteUser, getUsers } from "../services/user.service";

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

export{deleteUserController, getUserController};