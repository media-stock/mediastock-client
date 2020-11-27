export const getAccessTokenFromState = (getState) => {
    const accessToken = getState()?.user?.toJS()?.logined?.accessToken;
    return { accessToken };
};

export const getUserIdFromState = (getState) => {
    const userId = getState()?.user?.toJS()?.logined?.user?.id;
    return { userId };
};

export const getDataPageAndOffset = (getState, reducer, key) => {
    const { page, offset } = getState()[reducer].toJS()[key];
    return { page, offset };
};
