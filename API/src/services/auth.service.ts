import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypto, verified } from "../utils/password.handle";
import { signToken } from "../utils/jwt.handle";


const registerNewUser = async ({name, user, password, email, phone_number}:User)=>{
    const chekIs = await UserModel.findOne({user, email, phone_number});
    if(chekIs) return "ALREADY_USER";
    const passHash = await encrypto(password);
    const registerNewUser = await UserModel.create({name, user, password:passHash, email, phone_number});

    return registerNewUser
}

const loginUser = async({user, password}:Auth)=>{
    const chekIs = await UserModel.findOne({user});
    if(!chekIs) return "USER_NOT_FOUND";
    const passHash = chekIs.password;
    const isCorrect = await verified(password, passHash);

    if(!isCorrect) return "CREDENTIALS_INVALID";
    const token = signToken(chekIs.user);
    const data ={
        token,
    }
    
    return data;
}

export {registerNewUser, loginUser};