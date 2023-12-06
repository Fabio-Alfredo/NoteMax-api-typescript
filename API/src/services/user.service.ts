import { response } from "express";
import UserModel from "../models/user.model"

const deleteUser = async (id:string) => {
    const responseUser = await UserModel.deleteOne({_id:id});
    return responseUser;
}

const getUsers = async ()=>{
    const responseUser = await UserModel.find({});
    return responseUser;
}

const patchUser = async (id:string, newRole:string)=>{
    const responseUser = await UserModel.updateOne({_id:id}, {$set:{role:newRole}})
    return responseUser;
}


export{deleteUser, getUsers, patchUser};