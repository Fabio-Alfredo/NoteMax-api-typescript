import { compare, hash } from "bcryptjs"


const encrypto = async(pass:string)=>{
    const passHash =await hash(pass, 10);
    return passHash
}

const verified=async (pass:string, passHash:string)=>{
    const isCorrect = await compare(pass, passHash);
    return isCorrect;
}

export{encrypto, verified}