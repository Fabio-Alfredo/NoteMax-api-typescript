import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
    {
        name:{
            type:String,
            required:true
        },
        user:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone_number:{
            type:Number,
            required:true
        },
        role:{
            type:String,
            enum:["user", "admin","superadmin"],
            default:"user"
        }
    },
    {
        timestamps: true,
        versionKey:false
    }
)

const UserModel = model('user', UserSchema);

export default UserModel;