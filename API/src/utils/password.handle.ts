import { hash } from "bcryptjs"


const encrypto = async(pass:string)=>{
    const passHash =await hash(pass, 10);
    return passHash
}

export{encrypto}