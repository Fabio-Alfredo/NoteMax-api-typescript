import { Auth } from "./auth.interface";

export interface User extends Auth {
    name:string;
    user:string;
    password:string;
    email:string;
    phone_number:number;
}