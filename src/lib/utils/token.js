import jwtDecode from 'jwt-decode';

export const getJWTDecoded = (accessToken) => {
    if (typeof window === 'undefined') return null;

    try {
        const decoded = jwtDecode(accessToken);
        const user = decoded?.user;

        return user;
    } catch (error) {
        return null;
    }
};
