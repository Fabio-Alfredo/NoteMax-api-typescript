import { sign, verify } from "jsonwebtoken"

interface JwtPayload {
    role: string;
    id: string;

}

const JWT_SECRET = process.env.JWT_SECRET || "algobueno";

const signToken = (id: object, role: string) => {
    const jwt = sign({ id, role }, JWT_SECRET, {
        expiresIn: "2h",
    })
    return jwt;
};

const verifiedToken = (token: string) => {

    const isOk = verify(token, JWT_SECRET) as JwtPayload;
    return isOk;
}

export { signToken, verifiedToken };


