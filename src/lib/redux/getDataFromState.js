export const getAccessTokenFromState = (getState) => {
    const accessToken = getState()?.user?.toJS()?.logined?.accessToken;
    return { accessToken };
};

export const getPageAndOffset = (reducer, key) => {
    return (getState) => {
        const { page, offset } = getState()[reducer]?.toJS()[key];
        return { offset: page * offset, limit: offset };
    };
};

export const getDataPageAndOffset = (getState) => {
    return (reducer, key) => {
        const { page, offset } = getState()[reducer]?.toJS()[key];
        return { offset: page * offset, limit: offset };
    };
};
