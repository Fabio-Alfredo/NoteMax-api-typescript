import { sign, verify } from "jsonwebtoken"

interface JwtPayload {
    role: string;
    user: string;

}

const JWT_SECRET = process.env.JWT_SECRET || "algobueno";

const signToken = (user: string, role: string) => {
    const jwt = sign({ user, role }, JWT_SECRET, {
        expiresIn: "2h",
    })
    return jwt;
};

const verifiedToken = (token: string) => {

    const isOk = verify(token, JWT_SECRET) as JwtPayload;
    return isOk;
}

export { signToken, verifiedToken };


