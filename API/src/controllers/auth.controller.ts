import { Request, Response, response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";
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

const loginUserController = async ({body}:Request,res:Response)=>{
    const {user, password} = body;

    const response = await loginUser({user, password});
    if(response === "CREDENTIALS_INVALID"){
        res.status(404);
        res.send(response)
    }else{
        res.send(response);
    }
}

export {registerUserController, loginUserController};