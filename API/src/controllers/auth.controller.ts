import { Request, Response, response } from "express";
import { registerNewUser } from "../services/auth.service";
import { handleHttp } from "../utils/error.handle";

const registerUserController = async({body}:Request, res:Response)=>{
    try{
        registerNewUser(body);
        res.send("USER_CREATED");
    }catch(e){
        console.log(e);
        handleHttp(res, "ERROR_REGISTER", e);
    }
}

export {registerUserController};