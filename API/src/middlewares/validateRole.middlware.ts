import { NextFunction, Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { verified } from "../utils/password.handle";
import { verifiedToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req.extend.interface";


const checkRole = (allowedRoles: string[]) => async (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization || " ";
        const tokenBy = token.split(" ").pop()
        const tokenData = await verifiedToken(`${tokenBy}`);

        if (!tokenData) {
            res.status(401);
            res.send("NO_TIENES_UNA_SESION_VALIDA");
        } else {
            if (!allowedRoles.includes(tokenData.role)) {
                res.status(403);
                return res.send("NOT_PERMISE");
            }
            next();
        }
    } catch (e) {
        console.log(e);
        handleHttp(res, "error");
    }
}

export { checkRole };