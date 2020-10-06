export const createPromiseThunk = (type, promise) => {
    const [TYPE_DONE, TYPE_ERROR] = [`${type}_DONE`, `${type}_ERROR`];

    return (param) => async (dispatch, getState) => {
        dispatch({ type }); // pending

        try {
            const { status, data } = await promise(param);
            if (status >= 200 && status < 300) {
                dispatch({ type: TYPE_DONE, payload: data });
            } else {
                dispatch({ type: TYPE_ERROR, payload: { status, data } });
            }
        } catch (error) {
            dispatch({ type: TYPE_ERROR, payload: error });
        }
    };
};
