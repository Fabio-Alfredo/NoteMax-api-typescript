import { sign, verify} from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "algobueno";

const signToken=(user:string)=>{
    const jwt =sign({user}, JWT_SECRET,{
        expiresIn : "2h",
    })
    return jwt;
};

export {signToken};


