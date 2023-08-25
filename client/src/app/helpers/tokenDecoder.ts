import jwt, { JwtPayload } from 'jsonwebtoken';
type UserToken = string;
interface DecodedToken {
    userName: string;
    role: string;
    iat: number;
    exp: number;
}
export function decodeToken(): DecodedToken | null {
    const token = localStorage.getItem("user-token");
    if (token) {
        try {
            const parsedUserData = JSON.parse(token) as UserToken;
            const decoded: DecodedToken = jwt.decode(parsedUserData) as DecodedToken;
            return decoded;
        } catch (error) {
            console.error("Error decoding token:", error);
        }
    }
    return null;
}
