import { response } from "express";
import UserModel from "../models/user.model"
import { User } from "../interfaces/user.interface";

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

const updateUser = async (id:string, user:Partial<User>)=>{
    const responseUser = await UserModel.updateOne({_id:id}, user);
    console.log(user);
    return responseUser;  
}


export{deleteUser, getUsers, patchUser, updateUser};