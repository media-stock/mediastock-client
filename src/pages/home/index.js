import React from 'react';

// container
import HomeContainer from 'container/home';

// redux
// import { wrapper } from 'stores';
import { useDispatch } from 'react-redux';
import * as homeActions from 'stores/home';

export default function IndexPage() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(homeActions.onGetHome());
    }, []);

    return (
        <>
            <HomeContainer />
        </>
    );
}
