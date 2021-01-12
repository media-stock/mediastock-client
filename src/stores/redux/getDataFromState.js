export const getAccessTokenFromState = (getState) => {
    const accessToken = getState()?.user?.toJS()?.logined?.accessToken;
    return { accessToken };
};

export const getUserIdFromState = (getState) => {
    const userId = getState()?.user?.toJS()?.logined?.user?.id;
    return { userId };
};

export const getDataPageAndOffset = (getState) => {
    console.log(`getDataPageAndOffset`, getState);
    return (reducer, key) => {
        // const { page, offset } = getState()[reducer]?.toJS()[key];
        console.log(getState());

        return {};
        return { offset: page * offset, limit: offset };
    };
};
