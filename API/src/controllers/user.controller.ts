import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { deleteUser, getUsers, patchUserPass, patchUserRole, updateUser } from "../services/user.service";
import { updateNotes } from "../services/notes.service";
import { checkJwt } from "../middlewares/validateSesion.middlware";
import { verifiedToken } from "../utils/jwt.handle";

const deleteUserController = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteUser(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_USER", e);
    }
}

const getUserController = async (req: Request, res: Response) => {
    try {


        const response = await getUsers();
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_GET_USERS", e);
    }
}

const patchUserRoleController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const info = req.body.role;
        const response = await patchUserRole(id, info);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_PATCH", e)
    }
}

const patchUserPassController = async (req: Request, res: Response) => {
    try {
        const auth = req.headers.authorization || " ";
        const token = auth.split(" ").pop();

        if (token) {
            const tokenData = await verifiedToken(token);
            const id = tokenData.id;
            const pass = req.body.password;
            const response = await patchUserPass(id, pass);
            res.send(response);
        }

    } catch (e) {
        handleHttp(res, "ERROR_NEW_DATA", e);
    }
}


const updateUserController = async (req: Request, res: Response) => {
    try {
        const auth = req.headers.authorization || " ";
        const token = auth.split(" ").pop();

        if (token) {
            const tokenData = await verifiedToken(token);
            const id = tokenData.id;
            const response = await updateUser(id, req.body);
            res.send(response);
        }
    
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE", e);
    }
}


export {
    deleteUserController,
    getUserController,
    patchUserRoleController,
    updateUserController,
    patchUserPassController
};