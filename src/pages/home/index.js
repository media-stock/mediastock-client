import React from 'react';

// container
import HomeContainer from 'container/home';

// redux
import { wrapperComponent } from 'stores';
import { onGetHome } from 'stores/home';

function IndexPage({ state, dispatch }) {
    React.useEffect(() => {
        dispatch(onGetHome());
    }, []);

    return (
        <>
            <HomeContainer state={state} dispatch={dispatch} />
        </>
    );
}

export default wrapperComponent(IndexPage, onGetHome);
