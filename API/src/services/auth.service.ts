import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypto } from "../utils/password.handle";


const registerNewUser = async ({name, user, password, email, phone_number}:User)=>{
    const chekIs = await UserModel.findOne({user, email, phone_number});
    if(chekIs) return "ALREADY_USER";
    const passHash = await encrypto(password);
    const registerNewUser = await UserModel.create({name, user, password:passHash, email, phone_number});

    return registerNewUser
}

export {registerNewUser};