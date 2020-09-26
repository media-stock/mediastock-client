import jwt_decode from "jwt-decode";

export const getJwtDecode = accessToken => {
    const decoded = jwt_decode(accessToken);
    return decoded;
}