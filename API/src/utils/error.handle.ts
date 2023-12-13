import { NextFunction, Response } from "express"

const handleHttp =(res:Response, error:string, errorRaw?:any)=>{
    res.status(500);
    console.log(errorRaw);
    res.send({error});
}

export {handleHttp};