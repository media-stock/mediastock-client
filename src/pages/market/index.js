import React from 'react';
import MeTalkMarktetContainer from 'container/market';

// helmet
import { Helmet } from 'components';
import { metalkMarketHelmet as helmet } from 'config';

// redux
import { wrapperComponent } from 'stores';
import { onGetMarkets } from 'stores/market';

const query = { state: 'ipo' };

function MetalkMarktetPage({ state, dispatch }) {
    React.useEffect(() => {
        dispatch(onGetMarkets(query));
    }, []);

    return (
        <>
            <Helmet helmet={helmet} />
            <MeTalkMarktetContainer state={state} dispatch={dispatch} />
        </>
    );
}

export default wrapperComponent(MetalkMarktetPage, () => onGetMarkets(query));
